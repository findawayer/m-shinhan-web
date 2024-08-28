import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as config from '~/config';
import { Button } from '~/shared/ui/button';
import { Checkbox } from '~/shared/ui/checkbox';
import { FieldError, Form } from '~/shared/ui/form';
import { Input } from '~/shared/ui/input';
import { Label } from '~/shared/ui/label';
import { TextField } from '~/shared/ui/text-field';
import { useLoginContext } from './-context';
import { loginFormSchema, type LoginFormValues } from './-schema';

export const LoginForm = () => {
  const { busy, onLogin } = useLoginContext();

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
      persist: false,
    },
    resolver: zodResolver(loginFormSchema),
    shouldFocusError: true,
  });

  return (
    <Form onSubmit={form.handleSubmit(onLogin)}>
      <fieldset className="space-y-4" disabled={busy}>
        <Controller
          control={form.control}
          name="email"
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error },
          }) => (
            <TextField
              isInvalid={invalid}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            >
              <Label>아이디</Label>
              <Input
                ref={ref}
                autoComplete="username"
                autoFocus
                placeholder="이메일 주소"
                type="email"
              />
              <FieldError>{error?.message}</FieldError>
            </TextField>
          )}
        />
        <Controller
          control={form.control}
          name="password"
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error },
          }) => (
            <TextField
              isInvalid={invalid}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            >
              <Label>비밀번호</Label>
              <Input ref={ref} type="password" />
              <FieldError>{error?.message}</FieldError>
            </TextField>
          )}
        />
        <Controller
          control={form.control}
          name="persist"
          render={({ field }) => (
            <Checkbox isSelected={field.value} onChange={field.onChange}>
              로그인 상태를 {config.AUTHENTICATION_PERSISTED_DAYS}일 동안
              유지합니다.
            </Checkbox>
          )}
        />
      </fieldset>
      <fieldset className="mt-8 grid" disabled={busy}>
        <Button type="submit" variant="primary">
          로그인
        </Button>
      </fieldset>
    </Form>
  );
};
