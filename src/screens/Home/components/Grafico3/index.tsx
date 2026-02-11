import { useMemo } from 'react';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { useTheme } from 'styled-components';

import { darken, lighten } from 'polished';

// Styles
import { CardBodyGrafico, ContentGrafico, ContentLegend, Value } from './styles';

// Types
import type { CoursesMetricsProps } from '@/@types/graficos';

import { transformToPieData } from './grafico3.utils';

export function Grafico3({ data }: { data: CoursesMetricsProps[] }) {
  const { COLORS, name } = useTheme();

  const pieData = useMemo(() => transformToPieData(data), [data]);

  const totalGeral = pieData.reduce((acc, item) => acc + item.value, 0);

  function CustomTooltip({ active, payload }: any) {
    if (active && payload && payload.length) {
      const { value, payload: data } = payload[0];

      return (
        <div 
          role="status" 
          aria-live="polite"
          style={{ 
            background: COLORS.TOOLTIP_BG, 
            borderRadius: '8px', 
            padding: '8px 12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            fontSize: '12px',
            color: COLORS.TEXT 
          }}
        >
          <p style={{ margin: 0 }}>
            <span style={{ fontWeight: 'bold', color: name === 'dark' ? lighten(0.22, data.color) : darken(0.1, data.color) }}>{name}:</span> {value} alunos
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <CardBodyGrafico
      role="region" 
      aria-label="Gráfico de distribuição de alunos por curso"
    >
      {data.length > 0 && (
        <>  
          <ContentGrafico>
            <Value aria-label={`Total geral de inscritos: ${totalGeral}`}>{totalGeral}%</Value>
            <ResponsiveContainer width={200} height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  stroke="none"
                  role="img"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      tabIndex={0}
                      role="graphics-symbol"
                      aria-label={`${entry.name}: ${entry.value} alunos`}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: any) => [value, 'Alunos']}
                  contentStyle={{ 
                    background: COLORS.TOOLTIP_BG, 
                    color: COLORS.TEXT, 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
                  }}
                  content={<CustomTooltip />}
                />
              </PieChart>
            </ResponsiveContainer>
          </ContentGrafico>
          <ContentLegend as="ul" role="list">
            {pieData.map(item => (
              <li 
                key={item.name} 
                style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}
                role="listitem"
              >
                <div 
                  aria-hidden="true"
                  style={{ width: 12, height: 12, backgroundColor: item.color, borderRadius: '2px' }} 
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <span style={{ color: COLORS.TEXT, fontSize: '0.9rem' }}>{item.name}</span>
                  <span style={{ color: COLORS.TEXT, fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {item.value}
                  </span>
                </div>
              </li>
            ))}
          </ContentLegend>
        </>
      )}
    </CardBodyGrafico>
  );
}