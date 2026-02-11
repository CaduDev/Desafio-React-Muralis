import { screen } from '@testing-library/dom';
import { renderWithProvidersLogged } from '@/withProviders';
import { transformToPieData } from './grafico3.utils';
import { Grafico3 } from '.';

const mockData = [
  {
    id: 'react',
    label: 'React',
    color: '#61dafb',
    incoming: [
      { day: '2026-02-10', total: 10 },
      { day: '2026-02-20', total: 5 },
    ],
  },
  {
    id: 'node',
    label: 'Node',
    color: '#3c873a',
    incoming: [
      { day: '2026-02-15', total: 7 },
    ],
  },
];

describe('transformToPieData', () => {
  it('deve agrupar corretamente os totais para o gráfico de pie', () => {
    const result = transformToPieData(mockData as any);

    expect(result).toEqual([
      {
        name: "React",
        value: 15,
        color: "#61dafb"
      },
      {
        name: "Node",
        value: 7,
        color: "#3c873a"
      }
    ]);
  });

});

describe('Grafico2', () => {
  it('deve renderizar o gráfico de linhas com a progressão do curso no mês', () => {
    renderWithProvidersLogged(<Grafico3 data={mockData as any} />);

    expect(
      screen.getByRole('region', {
        name: /gráfico de distribuição de alunos por curso/i,
      })
    ).toBeInTheDocument();
  });
});
