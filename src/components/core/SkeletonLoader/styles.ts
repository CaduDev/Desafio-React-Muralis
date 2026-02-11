import type { CSSProperties } from 'react';

import styled, { keyframes, } from 'styled-components';

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const ShimmerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.SURFACE || '#eeeeee'};
  z-index: 10;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.COLORS.SURFACE_HIGHLIGHT || 'rgba(255, 255, 255, 0.4)'},
      transparent
    );
    animation: ${shimmer} 1.5s infinite;
  }
`;

export const SkeletonContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top; 
`;

interface SkeletonLoaderContainerProps {
  $showAnimation: boolean;
  style?: CSSProperties;
}

export const SkeletonLoaderContainer = styled.div<SkeletonLoaderContainerProps>`
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 4px;

  ${props => props.$showAnimation && `
    & > * {
      opacity: 0.5;
      filter: grayscale(1);
    }
  `}
`;