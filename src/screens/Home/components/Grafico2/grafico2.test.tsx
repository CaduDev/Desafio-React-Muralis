import { screen } from '@testing-library/dom';
import { renderWithProvidersLogged } from '@/withProviders';
import { transformToAreaChartData, transformToCalendarEvents } from './grafico2.utils';
import { Calendar } from '@core';
import { Grafico2 } from '.';

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

describe('transformToAreaChartData', () => {
  it('deve agrupar corretamente os totais por mês para o gráfico de linha', () => {
    const result = transformToAreaChartData(mockData);

    expect(result).toEqual([
      {
        name: "10",
        react: 10,
        node: 0
      },
      {
        name: "15",
        react: 0,
        node: 7
      },
      {
        name: "20",
        react: 5,
        node: 0
      }
    ]);
  });
});

describe('transformToCalendarEvents', () => {
  it('deve agrupar corretamente o objeto para calendário', () => {
    const resultCalendar = transformToCalendarEvents(mockData);

    expect(resultCalendar).toEqual([{"date":"2026-02-10","color":"#FFFFFF","background":"#61dafb","disabled":false},{"date":"2026-02-20","color":"#FFFFFF","background":"#61dafb","disabled":false},{"date":"2026-02-15","color":"#FFFFFF","background":"#3c873a","disabled":false}]);
  });
});

describe('Grafico2', () => {
  it('deve renderizar o gráfico de linhas com a progressão do curso no mês', () => {
    renderWithProvidersLogged(<Grafico2 data={mockData} />);

    expect(
      screen.getByRole('region', {
        name: /análise detalhada do mês/i,
      })
    ).toBeInTheDocument();
  });
});

describe('Calendario com os dias marcados pelos cursos que mais teve pico no dia', () => {
  it('deve renderizar o calendário sem crash', () => {
    const resultCalendar = transformToCalendarEvents(mockData);

    renderWithProvidersLogged(<Calendar events={resultCalendar} />);

    expect(
      screen.getByRole('presentation', { hidden: true })
    ).toBeInTheDocument();
  });

  it('deve aplicar o conteúdo customizado para datas com evento', () => {
   const resultCalendar = transformToCalendarEvents(mockData);

    renderWithProvidersLogged(<Calendar events={resultCalendar} />);
    expect(screen.getAllByText('10').length).toBeGreaterThan(0);
  });
});
