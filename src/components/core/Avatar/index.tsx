import { useTheme } from 'styled-components';

import { type AvatarSize } from '@/@types/avatar';

import defaultPicLight from '@/assets/defaulPic_light.png';
import defaultPicDark from '@/assets/defaultPic_dark.png';

import { Container } from './styles';

export interface AvatarProps {
  /** Link da imagem de perfil (opcional para exibir fallback) */
  uri?: string;
  /** Tamanho do componente: sm (32px), md (48px), lg (64px) ou automatic (100%) */
  size?: AvatarSize;
}

export function Avatar({ uri, size = 'md' }: AvatarProps) {
  const { name } = useTheme();

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
      ) : name === 'dark'
        ? (
          <img 
            src={defaultPicDark} 
            alt="" 
            aria-hidden="true" 
            loading="lazy" 
            onError={(e) => e.currentTarget.style.display = 'none'}
          />
        ) : (
          <img 
            src={defaultPicLight} 
            alt="" 
            aria-hidden="true" 
            loading="lazy" 
            onError={(e) => e.currentTarget.style.display = 'none'}
          />
        )
      }
    </Container>
  );
}