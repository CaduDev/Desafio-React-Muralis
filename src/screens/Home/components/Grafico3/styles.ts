import styled from 'styled-components';

import { CardBody } from '@core/Card';
import { device } from '@/components/core/breakpoints';

export const Value = styled.p`
  margin: 0px;
  padding: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 200;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const CardBodyGrafico = styled(CardBody)`
  align-items: center;
  min-height: 16px;
  
  ${device.tablet} {
    height: 300px;
    min-height: 300px;
  }
`;

export const ContentGrafico = styled.div`
  position: relative;
  width: min-content;
`;

export const ContentLegend = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 0px;
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