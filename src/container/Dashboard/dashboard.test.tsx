import { screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Dashboard } from './index';

import { renderWithProviders } from '@/withProviders';


const mockedUsedNavigate = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useNavigate: () => mockedUsedNavigate,
}));


describe('Dashboard Sidebar', () => {
  const mockMenu = [
    {
      id: 1,
      title: 'Início',
      uri: '/',
      icon: () => (<i>icon</i>),
      navLabel: 'Início'
    }
  ];

  
  it('deve navegar para a rota correta ao clicar em um item', () => {
    renderWithProviders(<Dashboard menuList={mockMenu} />);

    const sidebar = screen.getByRole('navigation', { name: /menu lateral/i });

    const menuButton = within(sidebar).getByRole('button', { name: /início/i });
    fireEvent.click(menuButton);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });

  it('deve alternar o estado de colapso ao clicar no botão trigger', () => {
    renderWithProviders(<Dashboard menuList={mockMenu} />);
    
    const toggleBtn = screen.getByLabelText(/recolher menu/i);
    fireEvent.click(toggleBtn);

    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
  });
});