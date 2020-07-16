import React, { useRef, FormEvent } from 'react';
import { MdSearch } from 'react-icons/md';

import * as S from './styles';

interface Props {
  fetchWeather: (value: string) => Promise<void>;
}

const Search: React.FC<Props> = ({ fetchWeather }) => {
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
    <S.Container>
      <S.Title>Previsão do tempo</S.Title>

      <S.Form onSubmit={onSubmit}>
        <S.Input
          ref={inputRef}
          placeholder="Coloque aqui o nome da cidade ..."
        />

        <S.SubmitButton type="submit">
          <MdSearch />
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default Search;
