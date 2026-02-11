import { useContext, useState } from 'react';

import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import { IoIosMenu } from 'react-icons/io';

import { IoPower } from 'react-icons/io5';

import { Avatar, Button, SwitchTheme, } from '@core';

import AuthContext from '@/context/Auth';

import { dashboard_itens } from '@/data/dashboard';

import {
  ButtonMenu,
  ContentArea,
  ContentMenu,
  LayoutContainer,
  LeftContent,
  MainContent,
  NavbarContainer,
  Overlay,
  RightContent,
  Sidebar,
  SidebarHeader,
  Title,
  UserContent,
} from './styles';

import type { DashboardProps } from '@/@types/dashboard';

export function Dashboard({
  menuList,
  showTitlePage=true,
  showTriggerButton=true,
  showNavbar=true,
  showButtonSwitchTheme=true,
}: DashboardProps) {
  const location = useLocation();

  const { user, signOut } = useContext(AuthContext);

  const navigation = useNavigate();

  const [menus, _setMenus] = useState(menuList);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <LayoutContainer>
      {isMobileOpen && (
        <Overlay onClick={() => setIsMobileOpen(false)} />
      )}
      <Sidebar
        $isCollapsed={isCollapsed}
        $isMobileOpen={isMobileOpen}
        role="navigation"
        aria-label="Menu Lateral"
      >
        <SidebarHeader style={{ fontSize: !isCollapsed ? '22px' : '14px'}}>
          Menu
        </SidebarHeader>
        <UserContent $isCollapsed={isCollapsed}>
          <div>
            <Avatar
              uri={user.avatar && user.avatar.thumb ? user.avatar.thumb : ''}
              size='automatic'
            />
          </div>
          {!isCollapsed && (
            <>
              <div>
                <h3>{user.fullname}</h3>
                <small>{user.email}</small>
              </div>
            </>
          )}
        </UserContent>
        <ContentMenu role="list">
          {dashboard_itens.map(res => (
            <ButtonMenu
              key={res.id}
              variant='light'
              isIconOnly={isCollapsed}
              onClick={() => {
                navigation(res.uri);
                setIsMobileOpen(false);
              }}
              size={isCollapsed ? "md" : "md"}
              $active={location.pathname === res.uri}
              aria-current={location.pathname === res.uri ? 'page' : undefined}
              title={isCollapsed ? res.title : undefined}
              aria-label={res.title}
              style={{ color: '#fff' }}
            >
              {res.icon({ "aria-hidden": "true" })}
              {!isCollapsed && (<p style={{ margin: 0 }}>{res.title}</p>)}
            </ButtonMenu>
          ))}
          <ButtonMenu
            variant='flat'
            isIconOnly={isCollapsed}
            onClick={signOut}
            color='danger'
            size={isCollapsed ? "md" : "md"}
            $active={false}
            title={'Sair'}
            aria-label={'Sair'}
          >
            <IoPower size={18} />
            {!isCollapsed && (
              <p style={{ margin: 0 }}>Sair</p>
            )}
          </ButtonMenu>
        </ContentMenu>
      </Sidebar>

      <MainContent>
        {showNavbar && (
          <NavbarContainer as="header">
            <LeftContent>
              {showTriggerButton && (
                <Button
                  className='desktop-collapse'
                  isIconOnly
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-expanded={!isCollapsed}
                  aria-label={isCollapsed ? "Expandir menu" : "Recolher menu"}
                >
                  <IoIosMenu />
                </Button>
              )}
              {showTitlePage && (
                <Title as="h1">{menus.find(res => location.pathname === res.uri)?.navLabel}</Title>
              )}
            </LeftContent>
            <RightContent>
              {showButtonSwitchTheme && (
                <SwitchTheme />
              )}
              <Button
                className='mobile-collapse'
                isIconOnly
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-expanded={isMobileOpen}
                aria-label="Abrir menu mobile"
                aria-controls="main-sidebar"
              >
                <IoIosMenu />
              </Button>
            </RightContent>
          </NavbarContainer>
        )}
        <ContentArea as="main">
          <Outlet />
        </ContentArea>
      </MainContent>
    </LayoutContainer>
  );
}