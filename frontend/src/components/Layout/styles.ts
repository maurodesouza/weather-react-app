import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
`;

export const City = styled.strong`
  text-align: center;
  flex-basis: 100%;
`;

export const ErrorMessage = styled.p`
  margin-top: 3rem;
  font-size: 2rem;
`;
