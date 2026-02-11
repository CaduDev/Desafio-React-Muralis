import styled, { css } from 'styled-components';
import { type AvatarSize } from '@/@types/avatar';

interface ContainerProps {
  $size: AvatarSize;
}

const sizeVariations = {
  sm: css`
    width: 32px;
    height: 32px;
  `,
  md: css`
    width: 48px;
    height: 48px;
  `,
  lg: css`
    width: 64px;
    height: 64px;
  `,
  automatic: css`
    width: 100%;
    height: 100%;
  `,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  ${({ $size }) => sizeVariations[$size]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;