import { useTheme } from 'styled-components';

import { Container } from './styles';

import ImageError404Light from '@/assets/error404_light.svg';
import ImageError404Dark from '@/assets/error404_dark.svg';

export function Error() {
  const { name } = useTheme();
  
  return (
    <Container>
      {name === 'light' && <img src={ImageError404Light} />}
      {name === 'dark' && <img src={ImageError404Dark} />}
    </Container>
  );
}