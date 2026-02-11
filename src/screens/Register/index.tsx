import { useContext, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useForm, type SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import z from 'zod';

import { Selectinput, Textinput } from '@core/fields';

import {
  Button,
} from '@core';

import {
  CardContent,
  CardBody,
  CardFooter
} from '@core/Card';


import { citysData, cursosData, statesData } from '@/data/cadastro';

import DialogContext from '@core/Dialog';

import {
  Container,
  ContainerCard,
  Header,
} from './styles';

export function Register() {
  const navigate = useNavigate();

  const { onOpen, } = useContext(DialogContext);

  const [cursos, _setCuros] = useState(cursosData);
  const [states, _setStates] = useState(statesData);
  const [citys, _setCitys] = useState(citysData);

  const cadastroFormSchema = z.object({
    name: z.string().nonempty('Informe o seu nome').min(3, 'Nome muito curto'),
    course: z.string().nonempty('Informe o curso'),
    city: z.string().nonempty('Informe a cidade'),
    state: z.string().nonempty('Informe o estado'),
  });

  type TCadastroFormData = z.infer<typeof cadastroFormSchema>

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<TCadastroFormData>({
    resolver: zodResolver(cadastroFormSchema),
    defaultValues: {
      name: '',
      course: '',
      state: '',
      city: '',
    }
  });

  const stateSelected = watch("state");

  const cidadesFiltradas = useMemo(() => {
    if (!stateSelected) return [];
    
    return citys.filter((city) => city.state_id === Number(stateSelected));
  }, [stateSelected]);

  useEffect(() => {
    setValue("city", ""); 
  }, [cidadesFiltradas, setValue]);

  const handleLoginSubmit: SubmitHandler<TCadastroFormData> = () => {
    onOpen({
      cancel: null,
      confirm: {
        onPress: () => {},
        title: 'Ok'
      },
      title: 'Atenção!',
      description: 'Dados salvos com sucesso!',
    })
  }

  return (
    <Container>
      <ContainerCard>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <CardContent style={{ padding: 0 }}>
            <Header>Cadastro de Ingressantes</Header>
            <CardBody
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 12,
                paddingTop: 24,
                paddingBottom: 24,
                gap: 12,
              }}
            > 
              <Textinput 
                id="name"
                name="name"
                label='Nome'
                placeholder='Digite seu nome'
                control={control}
                error={errors.name && errors.name.message}
              />
              <Selectinput
                id='course'
                name='course'
                label='Curso'
                placeholder={'Selecione o curso'}
                control={control}
                options={cursos}
                error={errors.course && errors.course.message}
              />
              <Selectinput
                id='state'
                name='state'
                label='Estado'
                placeholder={'Selecione o estado'}
                control={control}
                options={states}
                error={errors.state && errors.state.message}
              />
              <Selectinput
                id='city'
                name='city'
                label='Cidade'
                placeholder={'Selecione o cidade'}
                aria-placeholder={stateSelected ? "Selecione a Cidade" : "Selecione um Estado primeiro"}
                control={control}
                options={cidadesFiltradas}
                error={errors.city && errors.city.message}
              />
            </CardBody>
            <CardFooter style={{ paddingBottom: 12, paddingRight: 12 }}>
              <Button
                type="button"
                aria-label="Voltar para a tela anterior"
                color='warning'
                style={{
                  color: '#fff'
                }}
                onClick={() => navigate(-1)}
              >
                Voltar
              </Button>
              <Button
                type="submit"
                aria-label="Gravar dados do ingressante"
                color='secondary'
                style={{
                  color: '#fff'
                }}
              >
                Gravar
              </Button>
            </CardFooter>
          </CardContent>
        </form>
      </ContainerCard>
    </Container>
  );
};