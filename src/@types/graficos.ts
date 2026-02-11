export type IncomingProps =  {
  day: string;
  total: number;
}

export type CoursesMetricsProps = {
  id: string;
  label: string;
  color: string;
  incoming: IncomingProps[];
}