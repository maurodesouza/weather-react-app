import styled from 'styled-components';

type ContainerProps = {
  error: boolean;
};

export const Container = styled.form<ContainerProps>`
  display: flex;
  align-items: center;

  width: min(100%, 49rem);
  margin: 2rem auto 0;
  padding: 0 3rem;

  height: 4.5rem;

  border-radius: 5px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);

  transition: 0.4s;

  border: 1px solid
    ${props => (props.error ? props.theme.colors.error : 'transparent')};

  :hover {
    box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    height: 3rem;
    width: 3rem;
  }

  * {
    cursor: pointer;
  }
`;
