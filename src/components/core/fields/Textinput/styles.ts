import styled from 'styled-components';

export const Container = styled.input<{ $hasError?: boolean }>`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  width: auto;
  border: 2px solid ${({ $hasError, theme }) => $hasError ? theme.COLORS.DANGER : theme.COLORS.PRIMARY};
  color: ${({ $hasError, theme }) => $hasError ? theme.COLORS.DANGER : theme.COLORS.TEXT};
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.INPUT_PLACEHOLDER};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.COLORS.DANGER};
  font-size: 12px;
  margin: 0px;
`;
