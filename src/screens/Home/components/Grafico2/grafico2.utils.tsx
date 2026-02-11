import type { CoursesMetricsProps } from "@/@types/graficos";

export function transformToCalendarEvents(cursos: CoursesMetricsProps[], dataAtual: Date = new Date()) {
  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  
  const prefixoMesAtual = `${ano}-${mes}`; 

  // O Set eu coloquei aqui apenas para não deixar ter datas repetidas, garantir que os valores sejam únicos, quse como um obj
  const listaDeDatasUnicas = new Set<string>();
  
  // Junta tudo
  cursos.forEach((curso) => {
    curso.incoming.forEach((venda) => {
      // Só adicionamos se a data for do mês que estamos olhando
      if (venda.day.startsWith(prefixoMesAtual)) {
        listaDeDatasUnicas.add(venda.day);
      }
    });
  });

  // Faco o Set voltar a ser um Array para poder usar o .map(), ja que ele vira quae um obj quando se usa o Set
  const diasParaPintar = Array.from(listaDeDatasUnicas);
  
  // agora vem o map que montara pra saber qual qudrado e com qual cor ira ser colorido la no calendario, ja para colorir cada quadradinho conforme o curso que mais tem ingressantes
  return diasParaPintar.map((dia) => {
    
    // Aqui é onde eu vou guardar o dia com mais ingressnates
    let cursoVencedor = null;

    // Comeca com -1
    let maiorNumeroDeInscritos = -1;

    // Percorrer cada curso.
    cursos.forEach((curso) => {
      // Verifico se a ingressantes no dia atual
      const dadosDoDia = curso.incoming.find((item) => item.day === dia);
      
      // Caso tenha ingressantes eu pego esse valor e guardo se nao so jogo 0 na varivel
      const totalVendas = dadosDoDia ? dadosDoDia.total : 0;

      // Aqui verifico se o curso atual e no dia atual vendeu mais que o anterior eu dou um replace na variavel
      // assim o quadradinho vai ficar com a nova cor
      if (totalVendas > maiorNumeroDeInscritos) {
        maiorNumeroDeInscritos = totalVendas;
        cursoVencedor = curso;
      }
    });

    // curso que eu vou usar pra colorir o quadradinho do calendario
    if (cursoVencedor && maiorNumeroDeInscritos > 0) {
      return {
        date: dia,
        color: '#FFFFFF',
        // @ts-ignore
        background: cursoVencedor.color,
        disabled: false
      };
    }

    // Deixo transparente se a condicao de cima nao passou
    return {
      date: dia,
      color: '#333',
      background: 'transparent',
      disabled: false
    };
  });
}

export function transformToAreaChartData(cursos: CoursesMetricsProps[], dataAtual: Date = new Date()) {
  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const prefixoMesAtual = `${ano}-${mes}`;

  // Pego todas as datas únicas desse mês usando o set, meio que transforma em um objeto
  const datasUnicas = new Set<string>();

  cursos.forEach((curso) => {
    curso.incoming.forEach((venda) => {
      if (venda.day.startsWith(prefixoMesAtual)) {
        datasUnicas.add(venda.day);
      }
    });
  });

  // Ordeno os valores
  const diasOrdenados = Array.from(datasUnicas).sort();

  // Monto o objeto
  return diasOrdenados.map((diaCompleto) => {
    const diaApenas = diaCompleto.split('-')[2];

    const pontoNoGrafico: any = {
      name: diaApenas,
      fullDate: diaCompleto,
    };

    // Pra cada dia eu seto o total de cada curso
    cursos.forEach((curso) => {
      // Procura se teve ingresso nesse dia
      const ingressosNoDia = curso.incoming.find((v) => v.day === diaCompleto);
      
      // Uso o total ou 0
      pontoNoGrafico[curso.id] = ingressosNoDia ? ingressosNoDia.total : 0;
    });

    return pontoNoGrafico;
  });
}