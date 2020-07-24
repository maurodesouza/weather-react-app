import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ErrorText = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: ${props => props.theme.colors.error};
`;

export const Footer = styled.div`
  margin-top: -6rem;
  background-color: ${props => props.theme.colors.footer};
  width: calc(100% + 6rem);
  margin-left: -3rem;
  height: 20rem;
`;

export const ToggleThemeContainer = styled.div`
  margin: 0 auto;
  width: min(100%, 75rem);
  padding: 1rem 0;
`;

export const ToggleThemeWrapper = styled.div`
  width: 11rem;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  width: min(40rem, 100%);
  margin: 4rem auto 0;
`;
