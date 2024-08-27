import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
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
    react({
      babel: {
        babelrc: true,
      },
    }),
    {
      ...legacy({
        targets: ['last 4 versions and not dead', 'not IE 11'],
      }),
      apply: 'build',
    },
  ],
} satisfies UserConfig;
