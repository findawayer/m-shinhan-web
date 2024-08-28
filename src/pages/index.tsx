import { createFileRoute } from '@tanstack/react-router';
import { useAuthenticatedUser } from '~/features/authentication';
import { Description } from '~/shared/ui/description';
import { Title } from '~/shared/ui/title';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  const user = useAuthenticatedUser();

  return (
    <main className="p-4">
      <header className="mb-8 space-y-2.5">
        <Title element="h2" variant="h2">
          {user ? `환영합니다, ${user.name}님` : '어서오세요!'}
        </Title>
        {!user && (
          <Description variant="h2">
            우측 위 로그인 버튼을 눌러보세요.
          </Description>
        )}
      </header>
    </main>
  );
}
