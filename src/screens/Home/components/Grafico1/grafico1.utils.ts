import type { CoursesMetricsProps } from "@/@types/graficos";

export function transformToMonthlyData(courses: CoursesMetricsProps[]) {
  const uniqueMonths = new Set<string>();
  let monthKey = '';

  // Percorro o array de cursos pra ver todos os meses unico que tenho dados
  courses.forEach(course => {
    course.incoming.forEach(item => {
      // Aqui eu pego os 7 primeiros caracteres, ficando 2026-02, 2026-03 e etc
      monthKey = item.day.substring(0, 7); 
      uniqueMonths.add(monthKey);
    });
  });

  // Como o set meio que trasnforma num obj, eu volto pra array, e ordeno pela data
  const sortedMonths = Array.from(uniqueMonths).sort();

  // Aqui crio o array que o gráfico entende
  const chartData = sortedMonths.map(monthKey => {
    
    // Aqui eu crio o nome da base do grafico com as 3 primeiras letras do mes por exemplo JAN
    const [year, month] = monthKey.split('-');
    const monthName = new Date(
      Number(year),
      Number(month) - 1
    ).toLocaleString('pt-BR', { month: 'short' }).replace('.', '').toUpperCase();
      
    // O objeto começa { name: "FEV" } por exemplo
    const dataPoint: any = { 
      name: monthName 
    };

    // Percorro cada mes e calculo o TOTAL de cada curso 
    courses.forEach(course => {
      // Filtro pelo mes que esta no map atualmente 
      const recordsInThisMonth = course.incoming.filter(item => 
        item.day.startsWith(monthKey)
      );

      // Como todos os totais
      const totalInMonth = recordsInThisMonth.reduce((acc, item) => {
        return acc + item.total;
      }, 0);

      // Adiciono ao objeto
      dataPoint[course.id] = totalInMonth;
    });

    return dataPoint;
  });

  return chartData;
}