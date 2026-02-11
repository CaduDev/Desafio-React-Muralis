import { Calendar as ReactCalendar } from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import { CalendarWrapper, DayContainer } from './styles';

interface CalendarData {
  date: string;
  color: string;
  background: string;
  disabled?: boolean;
}

interface CustomCalendarProps {
  /**
  * Lista de datas que serão marcadas no calendário
  */
  events?: CalendarData[];
}

export function Calendar({ events, }: CustomCalendarProps) {
  function getTileConfig(date: Date): CalendarData | null {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    if (!events || events.length < 1) return null;
    return events.find(event => event.date === formattedDate) || null;
  }

  return (
    <CalendarWrapper
      aria-hidden="true" 
      role="presentation"
    >
      <ReactCalendar
        locale="pt-BR"
        showNavigation={false}
        tileDisabled={({ date }) => getTileConfig(date)?.disabled || false}
        formatShortWeekday={(locale, date) => 
          date.toLocaleDateString(locale, { weekday: 'short' }).toUpperCase().charAt(0)
        }
        tileContent={({ date }) => {
          const config = getTileConfig(date);
          
          return (
            <DayContainer 
              background={config?.background} 
              color={config?.color}
            >
              {date.getDate()}
            </DayContainer>
          );
        }}
      />
    </CalendarWrapper>
  );
}