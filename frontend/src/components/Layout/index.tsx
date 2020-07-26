import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

import Search from '@/components/Search';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Cards from '@/components/Cards';

import { FaSun, FaMoon } from 'react-icons/fa';

import { Weather, Forecast } from '@/components/@types';

import api from '@/services/api';
import image from '@/assets/img/weather.svg';

import * as S from './styles';
import usePersistedState from '@/hook/usePersistedState';

type Props = {
  toggleTheme(): void;
};

const Layout: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, theme } = useContext(ThemeContext);

  const [weather, setWeather] = usePersistedState<Weather | undefined>('weather', undefined);
  const [forecast, setForecast] = usePersistedState<Forecast | undefined>('forecast', undefined);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city: string): Promise<void> => {
    setLoading(true);
    setError(false);

    try {
      const weatherResponse = await api.get<Weather>('weather', {
        params: {
          q: city,
          units: 'metric',
          lang: 'pt_br',
          appid: process.env.REACT_APP_WEATHER_KEY,
        },
      });

      const forecastResponse = await api.get<Forecast>('onecall', {
        params: {
          lat: weatherResponse.data.coord.lat,
          lon: weatherResponse.data.coord.lon,
          exclude: 'current,hourly',
          units: 'metric',
          lang: 'pt_br',
          appid: process.env.REACT_APP_WEATHER_KEY,
        },
      });

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);

      if (err.response.data.cod === '404') {
        setErrorMessage('Essa cidade não foi encontrada!');
      }

      if (err.response.data.cod === '429') {
        setErrorMessage('Problemas com o servidor, volte mais tarde!');
      }
    }
  };

  return (
    <S.Container>
      <S.ToggleThemeContainer>
        <S.ToggleThemeWrapper>
          <FaMoon size={20} color={colors.primary} />
          <Switch
            onChange={toggleTheme}
            checked={theme === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={20}
            onColor={colors.footer}
            offColor={colors.footer}
            onHandleColor={colors.background}
            offHandleColor={colors.primary}
            activeBoxShadow="0px 0px 2px 3px rgba(255, 255, 255, 0.3)"
            height={30}
            width={50}
          />
          <FaSun size={20} color={colors.primary} />
        </S.ToggleThemeWrapper>
      </S.ToggleThemeContainer>

      <Search fetchWeather={fetchWeather} error={error} loading={loading} />

      {error && <S.ErrorText>{errorMessage}</S.ErrorText>}

      {weather && forecast ? (
        <>
          <Header city={weather?.name} />
          <Main weather={weather} />
          <Cards forecast={forecast} />
          <S.Footer />
        </>
      ) : (
        <S.ImgWrapper>
          <S.Img src={image} alt="intro" />
        </S.ImgWrapper>
      )}
    </S.Container>
  );
};

export default Layout;
