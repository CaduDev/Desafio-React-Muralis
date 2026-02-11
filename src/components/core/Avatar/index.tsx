import { useTheme } from 'styled-components';

import { BsPersonCircle } from 'react-icons/bs';

import { type AvatarSize } from '@/@types/avatar';

import { Container } from './styles';

export interface AvatarProps {
  /** Link da imagem de perfil (opcional para exibir fallback) */
  uri?: string;
  /** Tamanho do componente: sm (32px), md (48px), lg (64px) ou automatic (100%) */
  size?: AvatarSize;
}

export function Avatar({ uri, size = 'md' }: AvatarProps) {
  const { COLORS } = useTheme();

  return (
    <Container $size={size} role="presentation">
      {uri ? (
        <img 
          src={uri} 
          alt="" 
          aria-hidden="true" 
          loading="lazy" 
          onError={(e) => e.currentTarget.style.display = 'none'}
        />
      ) : (
        <BsPersonCircle 
          color={COLORS.PRIMARY_STRONG} 
          aria-hidden="true" 
        />
      )}
    </Container>
  );
}