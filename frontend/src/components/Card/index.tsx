import React from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { WeatherForecast } from '@/components/@types';
import * as S from './styles';

interface Props {
  forecast: WeatherForecast;
}

const Card: React.FC<Props> = ({ forecast }) => {
  const date = new Date(forecast.dt_txt);
  const icon = `owf owf-${forecast.weather[0].id} owf-5x`;

  return (
    <S.Container>
      <S.DayName>
        {format(date, 'EEEE', {
          locale: pt,
        })}
      </S.DayName>

      <S.Date>
        {format(date, "dd 'de' MMMM, HH':'mm", {
          locale: pt,
        })}
      </S.Date>

      <S.Icon className={icon} />
      <S.Temperature>23°</S.Temperature>
      <S.Description>{forecast.weather[0].description}</S.Description>
    </S.Container>
  );
};

export default Card;
