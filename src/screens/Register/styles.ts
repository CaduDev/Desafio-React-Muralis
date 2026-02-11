import styled from 'styled-components';

import { CardContent, CardHeader } from '@core/Card';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled(CardContent)`
  width: 350px;
  max-width: 350px;
  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 8px;
  font-family: Arial, sans-serif;
  padding: 0px;
  background-color: ${({ theme }) => theme.COLORS.SURFACE};
`;

export const Header = styled(CardHeader)`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: white;
  padding: 12px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0px;
`;