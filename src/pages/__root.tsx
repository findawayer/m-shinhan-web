import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { useAuthenticatedUser } from '~/features/authentication';
import { isDevelopmentEnv } from '~/shared/utilities/env';

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  const user = useAuthenticatedUser();

  return (
    <div className="bg-muted-light">
      <div className="text-gray-950 mx-auto min-h-[100svh] max-w-3xl scroll-smooth break-words break-keep bg-white antialiased [text-rendering:optimizeLegibility]">
        <header className="border-b-gray-200 flex gap-2 border-b p-4">
          <Link to="/" className="mr-auto">
            홈
          </Link>
          {!user && (
            <Link to="/login" className="[&.active]:font-bold">
              로그인
            </Link>
          )}
        </header>
        <Outlet />
      </div>
      {isDevelopmentEnv() && <TanStackRouterDevtools />}
    </div>
  );
}

function NotFound() {
  return (
    <div className="p-4">
      <p>페이지를 찾을 수 없습니다.</p>
    </div>
  );
}
