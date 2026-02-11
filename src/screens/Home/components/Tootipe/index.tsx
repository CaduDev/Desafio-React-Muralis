import { useTheme } from "styled-components";

import { darken, lighten } from "polished";

export  function CustomTooltip({ active, payload, label }: any) {
  const { COLORS, name } = useTheme();

  if (active && payload && payload.length) {
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
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{label}</p>

        {payload.map((item: any, index: number) => (
          <p key={index} style={{ color: name === 'dark' ? lighten(0.22, item.color) : darken(0.1, item.color) }}>
            {`${item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    );
  }

  return <></>;
};