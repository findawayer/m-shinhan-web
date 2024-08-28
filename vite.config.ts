import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import viteLegacy from '@vitejs/plugin-legacy';
import viteReact from '@vitejs/plugin-react';
import { type UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * 모듈 번들러를 커스텀 설정합니다.
 * @docs https://vitejs.dev/config/
 */
export default {
  build: {
    minify: 'terser',
    outDir: 'build',
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/pages')) {
            // src/pages/login/index.tsx -> pages-login
            // src/pages/login/-form.tsx -> pages-login
            const prefix = 'src/pages';
            const pageName = id
              .slice(id.indexOf(prefix) + prefix.length)
              .split('/')
              .at(0);

            return `pages-${pageName}`;
          }
        },
      },
    },
    // minifier Terser 설정 https://terser.org/docs/options/
    terserOptions: {
      compress: {
        ecma: 5,
        inline: 2,
      },
      mangle: {
        safari10: true,
      },
      output: {
        comments: false,
        ecma: 5,
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    svgr({
      include: '**/*.svg?react',
    }),
    TanStackRouterVite(),
    viteReact({
      babel: {
        babelrc: true,
      },
    }),
    {
      ...viteLegacy({
        targets: ['last 4 versions and not dead', 'not IE 11'],
      }),
      apply: 'build',
    },
  ],
} satisfies UserConfig;
