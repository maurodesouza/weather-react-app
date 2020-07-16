import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 0.3rem solid var(--dark);
  border-radius: 0.5rem;
  max-width: 20rem;
  width: 100%;
  margin-top: 2rem;

  & + & {
    margin-left: 1rem;
  }
`;

export const DayName = styled.strong`
  font-size: 1.8rem;
  text-transform: capitalize;
`;

export const Date = styled.p`
  margin-top: 0.5rem;
  font-size: 1.4rem;
  opacity: 0.8;
`;

export const Icon = styled.span`
  margin: 1rem 0;
`;

export const Temperature = styled.strong``;

export const Description = styled.p`
  opacity: 0.8;
  margin-top: 1em;
  text-align: center;
`;
