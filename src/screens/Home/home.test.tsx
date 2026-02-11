import { screen } from '@testing-library/react';

import { Home } from './';

import { renderWithProvidersLogged } from '@/withProviders';


describe('Tela home', () => {
  it('deve renderizar a Home sem crash', () => {
    renderWithProvidersLogged(<Home />);
    
    expect(screen.getByLabelText(/Página inicial do Dashboard/i)).toBeInTheDocument();
  });
})
