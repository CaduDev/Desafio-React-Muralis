import styled from 'styled-components';

import { CardBody } from '@core/Card';

import { device } from '@core/breakpoints';

export const GraficoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Legend = styled.div`
  margin-bottom: 10;
  display: flex;
  gap: 20;
  gap: 24px;
`;

export const Label = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  gap: 12px;

  > .dot {
    background-color: ${({ color }) => color};
    width: 16px;
    height: 16px;
    display: block;
    border-radius: 50%;
  } 
`;

export const CardBodyGrafico = styled(CardBody)`
  height: 300px;
  min-height: 300px;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  gap: 20px;
  display: flex;
  flex-direction: column;

  ${device.tablet} {
    height: 200px;
    min-height: 200px;
    flex-direction: row;
  }
`;

export const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;