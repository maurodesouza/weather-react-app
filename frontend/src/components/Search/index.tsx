import React, { useRef, FormEvent, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { MdSearch } from 'react-icons/md';

import * as S from './styles';

interface Props {
  fetchWeather: (value: string) => Promise<void>;
  loading: boolean;
  error: boolean;
}

const Search: React.FC<Props> = ({ fetchWeather, error, loading }) => {
  const { colors } = useContext(ThemeContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const input = inputRef.current;

    if (input) {
      fetchWeather(input.value);

      input.value = '';
    }
  };

  return (
    <S.Container onSubmit={onSubmit} error={error}>
      <S.Input
        ref={inputRef}
        placeholder={loading ? 'Carregando ...' : 'Sua cidade ...'}
      />

      <S.SubmitButton type="submit">
        <MdSearch size={30} color={error ? colors.error : colors.primary} />
      </S.SubmitButton>
    </S.Container>
  );
};

export default Search;
