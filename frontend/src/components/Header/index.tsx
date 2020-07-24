import React from 'react';

import { format } from 'date-fns';
import ptLocale from 'date-fns/locale/pt-BR';
import * as S from './styles';

type Props = {
  city: string;
};

const Header: React.FC<Props> = ({ city }) => {
  const date = new Date();

  return (
    <S.Container>
      <S.InfoDay>
        <S.Time>{format(date, "HH':'mm")}</S.Time>
        <S.Date>
          {format(date, `EEEE, d MMM yy`, {
            locale: ptLocale,
          })}
        </S.Date>
      </S.InfoDay>

      <S.City>{city}</S.City>
    </S.Container>
  );
};

export default Header;
