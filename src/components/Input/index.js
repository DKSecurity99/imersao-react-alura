import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function Input({ placeholder, onChange, ...rest }) { 
  return <InputItem placeholder={placeholder} onChange={onChange} {...rest}/>
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}


export default Input;
