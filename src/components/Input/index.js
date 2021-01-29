import styled from 'styled-components';

const InputItem = styled.input`
  width: 100%;
  margin-bottom: 3rem;
  padding: 1.2rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  transition: border .3s linear;
  outline: none;

  &:focus {
    border-width: 2px;
  }
`;

function Input({ placeholder, ...rest }) {
  return <InputItem placeholder={placeholder} {...rest}/>
}

export default Input;
