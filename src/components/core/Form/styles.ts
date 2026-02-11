import styled from 'styled-components';

export const Container = styled.form<{ direction?: 'vertical' | 'horizontal' }>`
  width: auto;
  display: flex;
  flex-grow: 1;
  flex-direction: ${({ direction }) => direction
    ? direction === 'vertical' ? 'column' : 'row'
    : 'column'};
`;
