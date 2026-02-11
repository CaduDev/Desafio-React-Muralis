import React, { Children, isValidElement, type CSSProperties } from 'react';

import { ShimmerOverlay, SkeletonContainer } from './styles';


interface SkeletonLoaderProps {
  children: React.ReactElement;
  showAnimation: boolean;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ children, showAnimation }) => {
  const child = Children.only(children) as React.ReactElement<{ style?: CSSProperties }>;

  if (!isValidElement(child)) return <>{children}</>;

  return (
    <SkeletonContainer
      style={child.props.style}
      aria-busy={showAnimation}
      aria-live="polite"
    >
      {children}
      
      {showAnimation && <ShimmerOverlay role="progressbar" aria-label="Carregando conteúdo" />}
    </SkeletonContainer>
  );
};