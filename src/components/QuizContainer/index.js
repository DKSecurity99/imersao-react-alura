import styled from 'styled-components';

const QuizContainer = styled.article`
  width: 100%;
  max-width: 35rem;
  padding-top: 4rem;
  margin: auto 3rem;

  @media screen and (max-width: 500px) {
    padding-top: 2rem;
  }
`;

export default QuizContainer;
