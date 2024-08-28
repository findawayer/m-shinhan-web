import { useMutation } from '@tanstack/react-query';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { authenticate, useSetAuthentication } from '~/features/authentication';
import { Description } from '~/shared/ui/description';
import { Switch } from '~/shared/ui/switch';
import { Title } from '~/shared/ui/title';
import { useToast } from '~/shared/ui/toast-provider';
import { LoginContext } from './-context';
import { LoginForm } from './-form';
import type { LoginFormValues } from './-schema';

export const Route = createLazyFileRoute('/login/')({
  component: LoginPage,
});

function LoginPage() {
  const setAuthentication = useSetAuthentication();
  const navigate = useNavigate({ from: '/login' });
  const toast = useToast();

  const [success, setSuccess] = useState(true);

  const mutation = useMutation({
    mutationFn: (_values: LoginFormValues) => authenticate(success),
    onError: () => {
      toast.add({ title: '문제가 발생했습니다. 다시 시도해 주세요.' });
    },
    onSuccess: (data, variables) => {
      if (success) {
        setAuthentication({ persist: variables.persist, user: data });
        navigate({ to: '/' });
      } else {
        toast.add({ title: '로그인에 실패했습니다.' });
      }
    },
  });

  return (
    <LoginContext.Provider
      value={{
        busy: mutation.isPending,
        onLogin: mutation.mutate,
      }}
    >
      <main className="p-4">
        <header className="mb-8 space-y-2.5">
          <Title element="h2" variant="h2">
            로그인
          </Title>
          <Description variant="h2">계정에 로그인합니다.</Description>
        </header>
        <LoginForm />
        <div className="mt-8">
          <Switch isSelected={success} onChange={setSuccess}>
            로그인 시도 성공
          </Switch>
        </div>
      </main>
    </LoginContext.Provider>
  );
}
