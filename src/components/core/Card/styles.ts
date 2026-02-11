import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  background-color: ${({ theme }) => theme.COLORS.SURFACE};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Content = styled.div`
  width: auto;
  padding: 12px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Header = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Body = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 200;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
