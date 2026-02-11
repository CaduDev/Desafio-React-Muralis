const size = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const device = {
  mobile: `@media (min-width: ${size.mobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  desktop: `@media (min-width: ${size.desktop})`,
};