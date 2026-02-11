import styled, { css } from 'styled-components';

import { type ButtonSize, type ButtonVariant, type ButtonRadius } from '@/@types/button';

interface ContainerProps {
  $color: ButtonVariant;
  size: ButtonSize;
  radius?: ButtonRadius;
  $isIconOnly: boolean;
  $variant: 'default' | 'light' | 'flat';
}

const sizeVariations = {
  sm: css<ContainerProps>`
    padding: ${props => props.$isIconOnly ? '0px' : '8px 14px'};
    width: ${props => props.$isIconOnly ? '32px' : 'auto'};
    height: ${props => props.$isIconOnly ? '32px' : 'auto'};
    border-radius: ${props => props.radius ? '4px' : 'auto'};
    font-size: 0.9rem;
    font-weight: 200;
  `,
  md: css<ContainerProps>`
    padding: ${props => props.$isIconOnly ? '0px' : '10px 20px'};
    width: ${props => props.$isIconOnly ? '40px' : 'auto'};
    height: ${props => props.$isIconOnly ? '40px' : 'auto'};
    border-radius: ${props => props.radius ? '8px' : 'auto'};
    font-size: 1.1rem;
    font-weight: 300;
  `,
  lg: css<ContainerProps>`
    padding: ${props => props.$isIconOnly ? '0px' : '14px 26px'};
    width: ${props => props.$isIconOnly ? '48px' : 'auto'};
    height: ${props => props.$isIconOnly ? '48px' : 'auto'};
    border-radius: ${props => props.radius ? '12px' : 'auto'};
    font-size: 1.1rem;
    font-weight: 400;
  `,
};

export const Container = styled.button<ContainerProps>`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  
  ${props => sizeVariations[props.size]}

  background-color: ${props => {
    const { COLORS } = props.theme;

    const colorMap = {
      default: COLORS.BUTTON_DEFAULT_BG,
      primary: COLORS.PRIMARY,
      secondary: COLORS.SECONDARY,
      success: COLORS.SUCCESS,
      warning: COLORS.WARNING,
      info: COLORS.INFO,
      danger: COLORS.DANGER,
    };

    const baseColor = colorMap[props.$color] || COLORS.SURFACE;

    if (props.$variant === 'light') {
      return 'transparent';
    }

    if (props.$variant === 'flat') {
      return `${baseColor}20`; 
    }

    return baseColor;
  }};

  color: ${props => {
    const { COLORS } = props.theme;

    if (props.$variant === 'flat' || props.$variant === 'light') {
      const colorMap = {
        default: COLORS.SURFACE,
        primary: COLORS.PRIMARY,
        secondary: COLORS.SECONDARY,
        success: COLORS.SUCCESS,
        warning: COLORS.WARNING,
        info: COLORS.INFO,
        danger: COLORS.DANGER,
      };

      return colorMap[props.$color];
    }

    if(props.$color === 'default') {
      return COLORS.TEXT;
    }

    return '#ffffff'
  }};

  border-radius:  ${props => {
    switch (props.radius) {
      case 'sm': return '4px';
      case 'md': return '8px';
      case 'lg': return '12px';
      case 'full': return '50%';
      default: return '8px';
    }
  }};

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    filter: grayscale(1);
  }

  &:active {
    background-color: ${props => {
      const { COLORS } = props.theme;

      const colorMap = {
        default: COLORS.SURFACE,
        primary: COLORS.PRIMARY,
        secondary: COLORS.SECONDARY,
        success: COLORS.SUCCESS,
        warning: COLORS.WARNING,
        info: COLORS.INFO,
        danger: COLORS.DANGER,
      };

      const baseColor = colorMap[props.$color] || COLORS.SURFACE;

      if (props.$variant === 'light') {
        return 'transparent';
      }

      if (props.$variant === 'flat') {
        return `${baseColor}50`; 
      }

      return baseColor;
    }};
  }
`;