import { screen } from '@testing-library/dom';
import { renderWithProvidersLogged } from '@/withProviders';
import { transformToMonthlyData } from './grafico1.utils';
import { Grafico1 } from '.';

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

describe('transformToMonthlyData', () => {
  it('deve agrupar corretamente os totais por mês e curso para gráfico de barras', () => {
    const input = [
      {
        id: 'react',
        label: 'React',
        incoming: [
          { day: '2026-02-01', total: 10 },
          { day: '2026-02-15', total: 5 },
        ],
      },
      {
        id: 'node',
        label: 'Node',
        incoming: [
          { day: '2026-02-10', total: 7 },
        ],
      },
    ];
    const result = transformToMonthlyData(input as any);

    expect(result).toEqual([
      {
        name: 'FEV',
        react: 15,
        node: 7,
      },
    ]);
  });

});

describe('Grafico1', () => {
  it('deve renderizar o gráfico de barras com os cursos', () => {
    renderWithProvidersLogged(<Grafico1 data={mockData as any} />);

    expect(
      screen.getByRole('region', {
        name: /gráfico de barras/i,
      })
    ).toBeInTheDocument();
  });
});
