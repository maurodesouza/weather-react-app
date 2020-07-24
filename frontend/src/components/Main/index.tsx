import React from 'react';

import { Weather } from '@/components/@types';

import * as S from './styles';

type Props = {
  weather: Weather;
};

const Main: React.FC<Props> = ({ weather }) => {
  const icon = `owf owf-${weather.weather[0].id}`;

  return (
    <S.Container>
      <S.Wrapper>
        <S.Temperature>{weather.main.temp.toFixed(0)}°</S.Temperature>
        <S.Icon className={icon} />
      </S.Wrapper>

      <S.Description>{weather.weather[0].description}</S.Description>
    </S.Container>
  );
};

export default Main;
