import React, { useState } from 'react';

import Search from '@/components/Search';
import Card from '@/components/Card';

import { Forecast, WeatherForecast, City } from '@/components/@types';

import api from '@/services/api';
import * as S from './styles';

const Layout: React.FC = () => {
  const [cityInfo, setCityInfo] = useState<City | undefined>(undefined);

  const [weatherForecasts, setWeatherForecasts] = useState<
    WeatherForecast[] | undefined
  >(undefined);
  const [hasError, setHasError] = useState(false);

  const get5DaysForecast = (forecast: Forecast): void => {
    const fiveDaysWeatherForecast = forecast.list.filter(reading =>
      reading.dt_txt.includes('12:00:00')
    );

    setWeatherForecasts(fiveDaysWeatherForecast);
  };

  const fetchWeather = async (city: string): Promise<void> => {
    setHasError(false);

    try {
      const { data } = await api.get<Forecast>(`forecast`, {
        params: {
          q: city,
          units: 'metric',
          lang: 'pt_br',
          appid: process.env.REACT_APP_WEATHER_KEY,
        },
      });

      get5DaysForecast(data);
      setCityInfo(data.city);
    } catch (err) {
      if (err.response.data.cod === '404') setHasError(true);
    }
  };

  return (
    <S.Container>
      <Search fetchWeather={fetchWeather} />

      {hasError ? (
        <S.ErrorMessage>Essa cidade não foi encontrada!</S.ErrorMessage>
      ) : (
        <S.Cards>
          <S.City>{cityInfo?.name}</S.City>
          {weatherForecasts?.map(forecast => (
            <Card key={forecast.dt} forecast={forecast} />
          ))}
        </S.Cards>
      )}
    </S.Container>
  );
};

export default Layout;
