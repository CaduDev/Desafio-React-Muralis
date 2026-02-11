import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 2px)); 
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;

export const Modal = styled.div`
  z-index: 30;
  min-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, calc(-50% + 2px));
  background-color: ${({ theme }) => theme.COLORS.SURFACE};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-width: .5px;
  border-color: #fff;
  animation: ${fadeInUp} 0.2s linear forwards;
  animation-delay: 0.2ms;
`;

export const ModalContent = styled.div`
  padding: 16px;
`;

export const ModalHeader = styled.div`
  font-size: 19px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.TEXT};
  position: relative;
`;

export const ButtonClosed = styled.button`
  width: 30px;
  height: 30px;
  padding: 0px;
  min-height: auto;
  max-height: auto;
  min-width: auto;
  max-width: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -12px;
  top: -12px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:active {
    opacity: 0.6;
    transition: 0.2s;
  }
`;

export const ModalBody = styled.div`
  font-size: 17px;
  font-style: normal;
  color: ${({ theme }) => theme.COLORS.TEXT};
  padding-top: 18px;
  padding-bottom: 18px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
