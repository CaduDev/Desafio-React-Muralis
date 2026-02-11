import { type HTMLAttributes, type ReactNode } from 'react';

import {
  Container,
  Header,
  Content,
  Body,
  Footer,
} from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  as?: React.ElementType;
}

function Card({ children,  ...res  }: CardProps) {
  return (
    <Container
      {...res}
    >
      {children}
    </Container>
  );
}

function CardContent({ children,  ...res  }: CardProps) {
  return (
    <Content
      {...res}
    >
      {children}
    </Content>
  );
}

function CardHeader({ children,  ...res  }: CardProps) {
  return (
    <Header
      {...res}
    >
      {children}
    </Header>
  );
}

function CardBody({ children,  ...res  }: CardProps) {
  return (
    <Body
      {...res}
    >
      {children}
    </Body>
  );
}

function CardFooter({ children,  ...res  }: CardProps) {
  return (
    <Footer
      {...res}
    >
      {children}
    </Footer>
  );
}

export {
  Card,
  CardContent,
  CardHeader,
  CardBody,
  CardFooter,
}