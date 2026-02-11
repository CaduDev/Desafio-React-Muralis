import { useContext } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardBody,
  CardFooter,
} from '@core/Card';

import {
  Textinput
} from '@core/fields';

import {
  Form,
} from '@core/Form';

import {
  Button,
  SwitchTheme,
} from '@core';

import { useForm, } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import z from 'zod';

import AuthContext from '@/context/Auth';

import { Container, NavBar } from './styles';

export function SignIn() {
  const { auth, isLoading } = useContext(AuthContext);

  const loginFormSchema = z.object({
    email: z.string().min(1,'Informe o seu e-mail'),
    password: z.string().min(1,'Informe a sua senha'),
  });

  type TLoginFormData = z.infer<typeof loginFormSchema>

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  async function submit(data: TLoginFormData) {
    await auth(data.email, data.password);
  }

  return (
    <Container>
      <NavBar as="header">
        <SwitchTheme />
      </NavBar>
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Card style={{ maxWidth: 400, borderRadius: 12, maxHeight: 'min-content' }}>
          <Form
            id={"form"}
            onSubmit={handleSubmit(submit)}
            direction="vertical"
          >
            <CardContent>
              <CardHeader style={{ fontSize: 32, paddingTop: 12, fontWeight: 100 }}>
                Login
              </CardHeader>
              <CardBody
                style={{
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 48,
                  paddingBottom: 24,
                  gap: 24,
                }}
              >
                <Textinput
                  id='email'
                  name='email'
                  label='E-mail'
                  placeholder='Informe o seu e-mail'
                  control={control}
                  type='email'
                  error={errors.email && errors.email.message}
                />
                <Textinput
                  id='password'
                  name='password'
                  label='Senha'
                  placeholder='Informe a sua senha'
                  control={control}
                  type='password'
                  error={errors.password && errors.password.message}
                />
              </CardBody>
              <CardFooter style={{ paddingRight: 12, paddingBottom: 12 }}>
                <Button
                  isLoading={isLoading}
                  size='md'
                  aria-label="Entrar no sistema"
                  type='submit'
                >
                  Entrar
                </Button>
              </CardFooter>
            </CardContent>
          </Form>
        </Card>
      </div>
    </Container>
  );
}