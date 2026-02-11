import styled from 'styled-components';

import { device } from '@core/breakpoints';

import { Button } from '@core';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Sidebar = styled.aside<{ $isMobileOpen: boolean; $isCollapsed: boolean; }>`
  width: 300px;
  position: absolute;
  left: ${props => props.$isMobileOpen ? '0' : '-400px'};
  z-index: 20;
  transition: all 0.3s ease-in-out;
  height: 100vh;

  ${({ theme }) => theme.name === 'light' 
    ? `
      background: linear-gradient(
        to bottom, 
        ${theme.COLORS.PRIMARY_LIGHT} 0%, 
        ${theme.COLORS.PRIMARY_STRONG} 100%
      );
    `
    : `
      background-color: ${theme.COLORS.SURFACE};
    `
  }

  ${device.tablet} {
    position: relative;
    left: 0px;
    min-width: 20px;
    width: ${props => props.$isCollapsed ? 'min-content' : '220px'};
    color: white;
    display: flex;
    flex-direction: column;
    z-index: auto;
    height: auto;
  }
`;

export const SidebarHeader = styled.div`
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ContentArea = styled.section`
  padding: 12px;
  flex: 1;
`;

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  min-height: 60px;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 500;

  ${device.desktop} {
    font-size: 24px;
  }
`;

export const LeftContent = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .desktop-collapse {
    display: none;
  }

  ${device.tablet} {
    .desktop-collapse {
      display: initial;
    }
  }
`;

export const RightContent = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${device.tablet} {
    .mobile-collapse {
      display: none;
    }
  }
`;

export const UserContent = styled.div<{ $isCollapsed: boolean }>`
  display: flex;
  max-width: ${({ $isCollapsed }) => $isCollapsed ? 'auto' : '300px'};
  height: 200px;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  justify-content: center;
  align-items: center;
  padding: 24px 80px;

  > div:nth-child(1) {
    width: 100%;
  }

  > div:nth-child(2) {
    padding: 24px 0px;
    padding-bottom: 0px;

    > h3 {
      margin: 0px;
      padding: 0px;
      color: #fff;
      text-align: center;
      font-size: 24px;
      max-width: fit-content;
      max-width: 288px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > small {
      display: block;
      opacity: 0.6;
      margin: 0px;
      max-width: fit-content;
      padding: 0px;
      color: #fff;
      text-align: center;
      max-width: 288px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  ${device.tablet} {
    width: ${({ $isCollapsed }) => $isCollapsed ? 'auto' : '220px'};
    padding: 24px 0px;

    > div:nth-child(1) {
      width: 50%;
    }

    > div:nth-child(2) {
      > h3, small {
        text-align: start;
        max-width: 188px;
      }

      > h3 {
        font-size: 18px;
        max-width: 188px;
      }
    }
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 24px;
  color: #fff;

  > p {
    margin: 0px;
  }
`;

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  gap: 12px;

  > .exit-the-system {
    color: ${({ theme }) => theme.COLORS.DANGER};
  }
`;

export const ButtonMenu = styled(Button)<{ $active: boolean }>`
  ${props => !props.isIconOnly && (
    `
      justify-content: flex-start;
      padding: 0px;
      padding: 12px;
      gap: 12px;
      font-size: 14px;
    `
  )}

  background-color: ${({ $active }) => $active && 'rgba(0,0,0,0.3)'};
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

  ${device.tablet} {
    display: none;
  }
`;