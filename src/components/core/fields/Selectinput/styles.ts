import styled from 'styled-components';

export const ContainerSelect = styled.select<{ $hasError?: boolean; $placeholder?: boolean }>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;
  width: auto;
  padding: 10px;
  border: 2px solid ${({ $hasError, theme }) => $hasError ? theme.COLORS.DANGER : theme.COLORS.PRIMARY};
  border-radius: 10px;
  font-size: 1rem;
  background-color: white;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND};

  color: ${({ theme, $hasError, $placeholder }) => {
    if ($hasError) return theme.COLORS.DANGER;
    if ($placeholder) return theme.COLORS.INPUT_PLACEHOLDER;
    return theme.COLORS.TEXT;
  }};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  option {
    color: ${({ theme }) => theme.COLORS.TEXT};
    background-color: ${({ theme }) => theme.COLORS.SURFACE};
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