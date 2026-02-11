import { MemoryRouter } from "react-router-dom";

import { render } from '@testing-library/react';

import { beforeEach } from "vitest";

import DialogContext from "@/components/core/Dialog";

import AuthContext from "@/context/Auth";

import { AppThemeProvider } from "@/context/Theme";

import picUser from '@/assets/avatar.jpg';

export const onOpenMock = vi.fn();
export const onCloseMock = vi.fn();
export const authMock = vi.fn();
export const signOutMock = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
});

const Providers = ({
  children,
  logged = false,
}: {
  children: React.ReactNode;
  logged?: boolean;
}) => (
  <AppThemeProvider>
    <MemoryRouter initialEntries={['/']}>
      <AuthContext.Provider
        value={{
          auth: authMock,
          isLoading: false,
          signOut: signOutMock,
          signed: logged,
          user: logged
            ? {
                avatar: {
                  thumb: picUser,
                  original: picUser,
                },
                id: 1,
                email: 'teste@teste.com',
                fullname: 'teste',
                name: 'teste',
                surname: 'teste teste'
              }
            : {
                avatar: null,
                id: null,
                email: '',
                fullname: '',
                name: '',
                surname: ''
              },
        }}
      >
        <DialogContext.Provider value={{ onOpen: onOpenMock, onClose: onCloseMock }}>
          {children}
        </DialogContext.Provider>
      </AuthContext.Provider>
    </MemoryRouter>
  </AppThemeProvider>
);

export const renderWithProviders = (ui: React.ReactElement) =>
  render(<Providers>{ui}</Providers>);

export const renderWithProvidersLogged = (ui: React.ReactElement) =>
  render(<Providers logged>{ui}</Providers>);
