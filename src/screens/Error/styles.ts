import { device } from '@core/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 100%;
  }

  ${device.desktop} {
    > img {
      max-width: 800px;
    }
  }
`;
