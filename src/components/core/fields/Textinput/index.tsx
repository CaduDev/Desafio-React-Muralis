import { type InputHTMLAttributes } from 'react';

import {
  type Control,
  Controller,
  type FieldError,
  type FieldErrorsImpl,
  type Merge
} from 'react-hook-form';

import { Container, Error, Label } from './styles';

interface IInputText extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  /**
   * String: valor obrigatório que será usado junto das dependencies do react-hook-form.
   */
  name: string;
  /**
   * String: Caso não passe essa prop o texto informativo em cima do botão não será exibido.
  */
  label?: string;
  /**
  * variavel: control vem da instancia do hook useForm do react-hook-form.
  */
  control: Control<any>;
  /**
   * Boolean: Mensagem de erro que muda a estica do botão para a cor informada no theme da dependencia styled-components.
   */
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export function Textinput({ control, name, label, error='',...rest }: IInputText) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      {(label && name) && <Label htmlFor={name}>{label}</Label>}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Container
            onChange={onChange}
            value={value}
            $hasError={!!error}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            {...rest}
          />
        )}
        name={name}
      />
      {!!error && (
        <Error
          id={`${name}-error`}
          role="alert"
        >
          *{String(error)}
        </Error>
      )}
    </div>
  );
}