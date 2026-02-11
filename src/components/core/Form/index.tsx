import type { HTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";

interface CardProps extends HTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
  direction?: 'vertical' | 'horizontal';
}

export function Form({ children,  ...res  }: CardProps) {
  return (
    <Container
      {...res}
    >
      {children}
    </Container>
  );
}