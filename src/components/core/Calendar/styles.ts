import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 400px;
  max-width: 100%;

  .react-calendar {
    width: 100% !important;
    max-width: 100%;
    background-color: ${({ theme }) => theme.COLORS.SURFACE};
    border: none;
    border-radius: 8px;
    font-family: inherit;
  }

  .react-calendar__navigation button {
    color: ${({ theme }) => theme.COLORS.TEXT};
    background: none;
    border: none;
    font-size: 0.9rem;
    cursor: pointer;
    &:disabled { background-color: transparent; }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.DANGER};
    abbr { text-decoration: none; }
    font-size: 0.6rem;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0;
  }

  .react-calendar__tile {
    aspect-ratio: 1 / 1; 
    width: 30px !important;
    min-width: 30px !important;
    height: 30px; 
    padding: 0px;
    font-size: clamp(0.7rem, 2vw, 0.3rem);
    color: ${({ theme }) => theme.COLORS.TEXT};
    display: flex;
    align-items: center;
    justify-content: center;
    background: none !important;

    abbr {
      display: none;
    }

    &:enabled:hover {
      background-color: transparent; 
      filter: brightness(0.9);
    }
  }

  @media (max-width: 480px) {
    .react-calendar__month-view__weekdays__weekday {
      padding: 2px;
      font-size: 0.6rem;
    }
    
    .react-calendar__navigation button {
      font-size: 1rem;
      min-width: 30px;
    }
  }
`;

interface DayContentProps {
  background?: string;
  color?: string;
}

export const DayContainer = styled.div<DayContentProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px;
  background-color: ${({ background }) => background || 'transparent'};
  color: ${({ color, theme }) => color || theme.COLORS.TEXT};
`;