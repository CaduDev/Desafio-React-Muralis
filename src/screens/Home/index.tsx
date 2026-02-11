import { useEffect, useMemo, useState } from 'react';

import { useTheme } from 'styled-components';

import {
  Card,
  CardContent,
  CardBody,
  CardFooter,
  CardHeader
} from '@core/Card';

import { useAppTheme } from '@/context/Theme';

import { Grafico1 } from './components/Grafico1';

import { Grafico2 } from './components/Grafico2';

import { Grafico3 } from './components/Grafico3';

import { CardContainer, Container, LeftContainer, RightContainer } from './styles';

import { coursesMetrics } from '@/data/graficos';

import { type CoursesMetricsProps } from '@/@types/graficos';
import { SkeletonLoader } from '@/components/core';

async function getFakeData(): Promise<any> {
  return new Promise((resolver) => {
    setTimeout(() => {
      return resolver({
        data: coursesMetrics
      });
    }, 2000)
  })
}

export function Home() {
  const theme = useTheme();

  const { themeName } = useAppTheme();

  const [data, setData] = useState<CoursesMetricsProps[]>([]);

  useEffect(() => {
    async function init() {
      const { data: response } = await getFakeData();

      setData(response);
    }

    init()
  }, []);

  const total = useMemo(() => {
    let totalGeral = 0;

    data.forEach((curso) => {
      curso.incoming.forEach((venda) => {
        totalGeral = totalGeral + venda.total;
      });
    });

    const totalFormatado = new Intl.NumberFormat('pt-BR').format(totalGeral);

    return totalFormatado;
  }, [data])

  return (
    <Container aria-label="Página inicial do Dashboard">
      <LeftContainer>
        <CardContainer>
          {[1, 2, 3].map(res => (
            <Card
              key={res}
              style={{
                backgroundColor: themeName === 'light'
                  ? theme.COLORS.PRIMARY_STRONG
                  : theme.COLORS.SURFACE,
                height: 200,
              }}
              as="section"
              aria-labelledby={`card-vazio-${res}`}
            >
              <CardContent>
                <CardHeader></CardHeader>
                <CardBody></CardBody>
                <CardFooter></CardFooter>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
        <SkeletonLoader showAnimation={data.length < 1}>
          <Card
            as="section"
            aria-labelledby={`card-inscritos-titulo`}
          >
            <CardContent>
              <CardHeader>
                <h3 id="card-inscritos-titulo" style={{ marginBottom: 20, }}>Inscritos</h3>
              </CardHeader>
            </CardContent>
            <Grafico1 data={data} />
          </Card>
        </SkeletonLoader>
        <SkeletonLoader showAnimation={data.length < 1}>
          <Card
            as="section"
            aria-labelledby={`card-de-inscritos-ate-o-momento`}
          >
            <CardContent>
              <Grafico2 data={data} />
            </CardContent>
          </Card>
        </SkeletonLoader>
      </LeftContainer>
      <RightContainer>
        <Card
          style={{ height: 200 }}
          as="section"
          aria-labelledby={`card-de-total-inscritos`}
        >
          <CardContent>
            <CardHeader>
              <h3 id="card-de-total-inscritos" style={{ marginBottom: 20, }}>Total de inscritos</h3>
            </CardHeader>
            <CardBody style={{ justifyContent: 'center', alignItems: 'center' }}>
              <SkeletonLoader showAnimation={data.length < 1}>
                <p
                  aria-label={`Total de inscritos: ${total}`}
                  aria-live="polite"
                  role="status"
                  style={{ fontSize: 42, margin: 0,  width: '100%', textAlign: 'center',  }}
                >
                  {total}
                </p>
              </SkeletonLoader>
            </CardBody>
          </CardContent>
        </Card>
        <SkeletonLoader showAnimation={data.length < 1}>
          <Card
            style={{ height: 400 }}
            as="section"
            aria-labelledby={`card-de-inscritos-no-mes-vigente`}
          >
            <CardContent> 
              <Grafico3 data={data} />
            </CardContent>
          </Card>
        </SkeletonLoader>
      </RightContainer>
    </Container>
  );
}