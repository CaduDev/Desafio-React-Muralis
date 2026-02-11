import { useTheme } from "styled-components";

import { darken, lighten } from "polished";

function formateDate(payload: any) {
  const dataBruta = payload[0].payload.fullDate; // Ex: '2026-02-14'
    
    const [_ano, mes, dia] = dataBruta.split('-');

    const mesesAbreviados: { [key: string]: string } = {
      '01': 'JAN', '02': 'FEV', '03': 'MAR', '04': 'ABR',
      '05': 'MAI', '06': 'JUN', '07': 'JUL', '08': 'AGO',
      '09': 'SET', '10': 'OUT', '11': 'NOV', '12': 'DEZ'
    };

    return `${dia} de ${mesesAbreviados[mes]}`;
}

export  function CustomTooltip({ active, payload }: any) {
  const { COLORS, name } = useTheme();

  let fullDate = null

  if (active && payload && payload.length) {

    if(payload[0].payload.fullDate) {
      fullDate = formateDate(payload)
    }

    return (
      <div 
        role="status" 
        aria-live="polite"
        style={{ 
          background: COLORS.TOOLTIP_BG, 
          borderRadius: '8px', 
          padding: '6px 12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          fontSize: '12px',
          color: COLORS.TEXT
        }}
      >
        {fullDate && (
          <p style={{ fontWeight: 'bold', marginBottom: '8px', borderBottom: `1px solid ${COLORS.BORDER || '#eee'}`, paddingBottom: '4px' }}>
            {fullDate}
          </p>
        )}

        {payload.map((item: any, index: number) => {
          return (
            <p key={index} style={{ color: name === 'dark' ? lighten(0.22, item.color) : darken(0.1, item.color) }}>
              {`${item.name}: ${item.value}`}
            </p>
          )
        })}
      </div>
    );
  }

  return <></>;
};