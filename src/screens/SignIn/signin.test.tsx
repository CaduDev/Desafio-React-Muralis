import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { vi } from 'vitest';

import { SignIn } from './index';

import { renderWithProviders } from '@/withProviders';


describe('Form de de login', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });  

  it('Deve exibir erro de campo obrigatório quando estiver vazio', async () => {
    const user = userEvent.setup();
    renderWithProviders(<SignIn />);

    const botaoGravar = screen.getByRole('button', { name: /entrar/i });
    await user.click(botaoGravar);

    expect(await screen.findByText(/Informe o seu e-mail/i)).toBeInTheDocument();
    expect(await screen.findByText(/Informe a sua senha/i)).toBeInTheDocument();
  });
});