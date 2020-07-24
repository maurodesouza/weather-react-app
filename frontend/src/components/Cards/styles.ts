import styled from 'styled-components';
import fluid from '@/util/fluid';

export const Container = styled.div`
  margin-top: 4rem;
  overflow-x: auto;
  width: calc(100% + 6rem);
  height: 19.3rem;
  padding-bottom: 2rem;
  margin-left: -3rem;
  display: flex;

  ::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.background};
  }

  ::-webkit-scrollbar {
    height: 5px;
  }

  @media screen and (min-width: 780px) {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  padding: 0 3rem;
  display: flex;
`;

export const Card = styled.div`
  flex-shrink: 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.background};
  width: ${fluid('111px', '126px', '768px')};
  box-shadow: 2px 8px 1rem rgba(0, 0, 0, 0.25);
  padding: 1.5rem 0;
  transition: 0.4s;

  & + & {
    margin-left: ${fluid('10px', '30px', '1150px')};
  }

  :hover {
    box-shadow: 3px 9px 1rem rgba(0, 0, 0, 0.5);
  }
`;

export const DayName = styled.strong`
  text-transform: capitalize;
`;

export const Icon = styled.span`
  margin: 1.5rem 0;
  font-size: 6.3rem;
  color: ${props => props.theme.colors.primary};
`;

export const Temperature = styled.strong``;
