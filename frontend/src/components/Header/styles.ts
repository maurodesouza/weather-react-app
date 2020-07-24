import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  width: min(100%, 35rem);
  margin: 4rem auto 0;

  @media screen and (min-width: 360px) {
    flex-direction: row;
  }
`;

export const InfoDay = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Time = styled.span`
  font-size: 3.6rem;
`;

export const Date = styled.span`
  font-size: 1.2rem;
`;

export const City = styled.span`
  font-size: 2.4rem;
  margin-top: 3rem;

  @media screen and (min-width: 360px) {
    margin-top: 0;
  }
`;
