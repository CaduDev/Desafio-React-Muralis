import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { useTheme } from 'styled-components';

import { Calendar } from '@core/Calendar';

import { CustomTooltip } from '../Tootipe';

import { CardBodyGrafico, GraficoContainer, Label, Legend, ScreenReaderOnly } from './styles';

import { transformToAreaChartData, transformToCalendarEvents } from './grafico2.utils';

import type { CoursesMetricsProps } from '@/@types/graficos';

export function Grafico2({ data }: { data: CoursesMetricsProps[] }) {
  const theme = useTheme();
  
  return (
    <CardBodyGrafico
      role="region" 
      aria-label="Análise detalhada do mês: Gráfico de área e calendário de performance"
    >
      <ScreenReaderOnly>
        Este bloco contém um gráfico de área mostrando a flutuação diária de inscritos e um calendário onde os dias são coloridos com a cor do curso que obteve mais vendas.
      </ScreenReaderOnly>
      <GraficoContainer style={{ position: 'relative'}}>
        <Legend>
          {data.map(res => (
            <Label key={res.id} color={res.color}>
              <span className='dot' />
              {res.label}
            </Label>
          ))}
        </Legend>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={transformToAreaChartData(data)} accessibilityLayer>
            <defs>
              {data.map((curso) => (
                <linearGradient 
                  key={curso.id} 
                  id={`gradient-${curso.id}`}
                  x1="0" y1="0" x2="0" y2="1"
                >
                  <stop offset="5%" stopColor={curso.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={curso.color} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>

            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ 
                background: theme.COLORS.TOOLTIP_BG, 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
              }}
              content={<CustomTooltip />}
            />
            {data.map((curso) => (
              <Area
                key={curso.id}
                type="monotone"
                dataKey={curso.id}
                stroke={curso.color}
                fill={`url(#gradient-${curso.id})`}
                fillOpacity={1}
                name={curso.label}
                role="img"
                aria-label={`Área de dados do curso ${curso.label}`}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </GraficoContainer>
      <Calendar events={transformToCalendarEvents(data)} />
    </CardBodyGrafico>
  );
}