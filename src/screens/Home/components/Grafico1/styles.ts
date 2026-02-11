import styled from 'styled-components';

import { CardBody } from '@core/Card';

import { device } from '@core/breakpoints';

export const CardBodyGrafico = styled(CardBody)`
display: block;
  height: 160px;
  min-height: 160px;
  
  ${device.tablet} {
    height: 300px;
    min-height: 300px;
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