import React from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Forecast } from '@/components/@types';

import * as S from './styles';

type Props = {
  forecast: Forecast;
};

const Card: React.FC<Props> = ({ forecast }) => {
  const nextFiveDaysForecast = forecast.daily.slice(1, 6);

  const averageBetween = (...numbers: number[]): number =>
    numbers.reduce((count, number) => count + number, 0) / numbers.length;

  const formatTime = (time: number): number => {
    const lenght = String(new Date().getTime()).length;

    const newTime = String(time).padEnd(lenght, '0');

    return Number(newTime);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {nextFiveDaysForecast.map(day => {
          const time = formatTime(day.dt);

          const date = new Date(time);
          const icon = `owf owf-${day.weather[0].id}`;

          return (
            <S.Card key={day.dt}>
              <S.DayName>
                {format(date, 'EEEE', {
                  locale: pt,
                })}
              </S.DayName>
              <S.Icon className={icon} />
              <S.Temperature>
                {averageBetween(day.temp.min, day.temp.max).toFixed(0)}°
              </S.Temperature>
            </S.Card>
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
};

export default Card;
