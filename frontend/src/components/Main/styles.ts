import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Temperature = styled.span`
  font-size: 7.2rem;
  margin-right: 1rem;
`;

export const Icon = styled.i`
  font-size: 11rem;
  color: ${props => props.theme.colors.primary};
`;

export const Description = styled.p`
  font-size: 1.4rem;
  margin-top: 2rem;
`;
