import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid, 
  Tooltip,
  Legend,
  ResponsiveContainer, 
} from 'recharts';

import { useTheme } from 'styled-components';

import { type CoursesMetricsProps } from '@/@types/graficos';

import { CustomTooltip } from '../Tootipe';

import { transformToMonthlyData } from './grafico1.utils';

import { CardBodyGrafico, ScreenReaderOnly } from './styles';


export function Grafico1({ data }: { data: CoursesMetricsProps[] }) {
  const { COLORS } = useTheme();

  return (
    <CardBodyGrafico
      role="region" 
      aria-label="Gráfico de barras: Distribuição de inscritos por curso e mês"
    >
      <ScreenReaderOnly>
        Gráfico de barras mostrando a evolução de inscritos. 
        Eixo X contém os meses e Eixo Y a quantidade de 0 a 50.
      </ScreenReaderOnly>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
        <BarChart
          data={transformToMonthlyData(data)}
          margin={{ top: 10, right: 30, left: 0, bottom: 0,  }}
          barGap={8}
          accessibilityLayer
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={COLORS.TEXT} />
          
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: COLORS.TEXT, fontSize: 12 }} 
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: COLORS.TEXT, fontSize: 12 }}
            ticks={[0, 10, 20, 30, 40, 50]} 
            domain={[0, 50]}
          />

          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ background: COLORS.TOOLTIP_BG, borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            content={<CustomTooltip />}
          />

          <Legend 
            verticalAlign="middle" 
            align="right" 
            layout="vertical"
            iconType="square"
            wrapperStyle={{ paddingLeft: '20px' }}
          />

          {data.map(res => (
            <Bar 
              key={res.id}
              dataKey={res.id}
              name={res.label}
              fill={res.color}
              radius={[2, 2, 0, 0]} 
              barSize={35}
              isAnimationActive={true}
              role="graphics-symbol"
              aria-label={`Curso ${res.label}`}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </CardBodyGrafico>
  );
}