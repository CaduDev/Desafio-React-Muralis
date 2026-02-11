import type { CoursesMetricsProps } from "@/@types/graficos";

export function transformToPieData(courses: CoursesMetricsProps[]) {
  return courses.map(course => {
    const totalStudents = course.incoming.reduce((acc, item) => acc + item.total, 0);

    return {
      name: course.label,
      value: totalStudents,
      color: course.color
    };
  });
}