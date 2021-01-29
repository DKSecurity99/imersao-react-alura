import styled from 'styled-components';

const ButtonItem = styled.button`
  width: 100%;
  padding: 1.2rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.second};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  text-align: center;
  border: none;
`;

function Button({ label, type, ...rest }) {
  return (
    <ButtonItem type={type} {...rest}>
      { label }
    </ButtonItem>
  )
}

export default Button;
