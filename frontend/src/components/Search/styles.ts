import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4.8rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 40rem;
  margin-top: 2rem;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  border: 0.2rem solid var(--dark);
  padding: 1.5rem 3rem;
  border-radius: 10rem;
  font-size: 1.5rem;
`;

export const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  padding: 2rem;

  transform: translateY(-50%);

  > svg {
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    color: var(--dark);
  }
`;
