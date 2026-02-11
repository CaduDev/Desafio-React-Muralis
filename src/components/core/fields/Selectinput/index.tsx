import { type SelectHTMLAttributes } from 'react';
import {
  type Control,
  Controller,
  type FieldError,
  type FieldErrorsImpl,
  type Merge
} from 'react-hook-form';

import { ContainerSelect, Error, Label } from './styles';

interface Option {
  value: string | number;
  label: string;
}

interface ISelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
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
  * lista: valores para listar as opções do select.
  */
  options: Option[];
  /**
   * String: Mensagem exibida quando nenhum valor estiver selecionado.
   */
  placeholder?: string;
  /**
   * Boolean: Mensagem de erro que muda a estica do botão para a cor informada no theme da dependencia styled-components.
   */
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export function Selectinput({ 
  control, 
  name, 
  options, 
  placeholder = "Selecione...", 
  label,
  error, 
  ...rest 
}: ISelectProps) {

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      {(label && name) && <Label htmlFor={name}>{label}</Label>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <ContainerSelect
            onChange={onChange}
            value={value ?? ''}
            $placeholder={value === ""}
            $hasError={!!error}
            {...rest}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </ContainerSelect>
        )}
      />
      
      {!!error && (
        <Error>
          *{typeof error === 'string' ? error : (error as FieldError)?.message}
        </Error>
      )}
    </div>
  );
}