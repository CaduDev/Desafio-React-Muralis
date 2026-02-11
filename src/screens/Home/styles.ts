import styled from 'styled-components';

import { device } from '@core/breakpoints';

export const Container = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  flex-direction: column;

  ${device.tablet} {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  ${device.tablet} {
    flex-direction: row;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  ${device.tablet} {
    width: 85%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  gap: 24px;
  width: auto;
  
  ${device.tablet} {
    width: 280px;
  }
`;