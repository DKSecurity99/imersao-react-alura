import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius}; 
  
  img {
    width: 5.8rem;
    margin-right: 2.3rem;
  }

  p, 
  a {
    font-size: 1.4rem;
  }

  a {
    color: ${({ theme }) => theme.colors.second};
    text-decoration: none;
    transition: .3s;

    &:hover,
    &:focus {
      opacity: .5;
    }

    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
