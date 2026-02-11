import { screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { vi } from 'vitest';

import { Register } from './index';

import { onOpenMock, renderWithProvidersLogged } from '@/withProviders';


describe('Form de Cadastro de ingressantes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });  

  describe('Validações do Campo Nome', () => {
    it('Deve exibir erro de campo obrigatório quando estiver vazio', async () => {
      const user = userEvent.setup();
      renderWithProvidersLogged(<Register />);

      const botaoGravar = screen.getByRole('button', { name: /gravar/i });
      await user.click(botaoGravar);

      expect(await screen.findByText(/Informe o seu nome/i)).toBeInTheDocument();
    });

    it('Deve exibir erro de tamanho mínimo quando tiver menos de 3 letras', async () => {
      const user = userEvent.setup();
      renderWithProvidersLogged(<Register />);

      const inputNome = screen.getByLabelText(/nome/i);
      const botaoGravar = screen.getByRole('button', { name: /gravar/i });

      await user.type(inputNome, 'Ab');
      await user.click(botaoGravar);

      expect(await screen.findByText(/Nome muito curto/i)).toBeInTheDocument();
    });
  });

  it('deve validar campos obrigatórios ao tentar salvar vazio', async () => {
    const user = userEvent.setup();
    renderWithProvidersLogged(<Register />);

    const botaoGravar = screen.getByRole('button', { name: /gravar/i });
    await user.click(botaoGravar);

    expect(await screen.findByText(/Informe o curso/i)).toBeInTheDocument();
    expect(await screen.findByText(/Informe a cidade/i)).toBeInTheDocument();
    expect(await screen.findByText(/Informe o estado/i)).toBeInTheDocument();
  });

  it('deve preencher o formulário completo e exibir o alerta de sucesso', async () => {
    const user = userEvent.setup();
    renderWithProvidersLogged(<Register />);

    // Nome para o teste
    await user.type(screen.getByLabelText(/nome/i), 'Camila Santos');

    // Seleicona o id do curso
    await user.selectOptions(screen.getByLabelText(/curso/i), '1');

    // Seleciona o id do estado
    await user.selectOptions(screen.getByLabelText(/estado/i), '1');

    // Depois de selecionar o estado seleciona a cidade
    const selectCidade = screen.getByLabelText(/cidade/i);
    await waitFor(() => expect(selectCidade).not.toBeDisabled());
    await user.selectOptions(selectCidade, '1');

    // Envir o formulario
    await user.click(screen.getByRole('button', { name: /gravar/i }));

    // Exibe o alert customizado
    await waitFor(() => {
      expect(onOpenMock).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'Atenção!',
          description: 'Dados salvos com sucesso!',
        })
      );
    });
  });
});