import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { ClipLoader } from 'react-spinners';

import { useTheme } from 'styled-components';

import type { ButtonSize, ButtonVariant, ButtonRadius } from '@/@types/button';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  /** 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'
  *
  * Define cores do botão conforme o tema passado para as dependencias do styled-components.
  */
  color?: ButtonVariant;
  /** 'sm' | 'md' | 'lg'
  *
  * Tamanhos pré-definido do botão. Pequeno, médio e grande.
  */
  size?: ButtonSize;
  /** true ou false
   *
   * True se quiser que botão so comporte um ícone. Passe o ícone como children
   */
  isIconOnly?: boolean;
  /** 'sm' | 'md' | 'lg' | 'full'
  *
  * Tamanho da curvatura da borda do botão.
  *
  * OBS: Full deixa ele redondo.
  */
  radius?: ButtonRadius;
  /** 'submit' | 'button' 
   *
   * Tipo de botão, sendo button padrão e submit para formulários.
   */
  type?: 'button' | 'submit';
  /**  
  * Boolean: Ativar loading.
  */
  isLoading?: boolean;
  variant?: 'default' | 'light' | 'flat';
}

export function Button({ 
  children,
  color = 'default',
  size = 'md',
  radius='md',
  variant='default',
  isIconOnly = false,
  type='button',
  isLoading=false,
  ...rest 
}: ButtonProps) {
  const { COLORS } = useTheme();

  return (
    <Container
      $color={color}
      size={size}
      $isIconOnly={isIconOnly}
      $variant={variant}
      type={type}
      disabled={rest.disabled || isLoading}
      {...rest}
    >
      {isLoading && (
        <ClipLoader
          color={COLORS.TEXT}
          loading={true}
          size={12}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {children}
    </Container>
  );
}