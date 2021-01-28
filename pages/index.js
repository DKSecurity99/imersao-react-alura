import styled from 'styled-components'
import Head from 'next/head';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GithubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';

export const QuizContainer = styled.article`
  width: 100%;
  max-width: 35rem;
  padding-top: 4rem;
  margin: auto 3rem;

  @media screen and (max-width: 500px) {
    padding-top: 2rem;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>DK Quiz - Imersão ReactJS Alura</title>
      </Head>
      <QuizBackground backgroundImage={db.bgPrimary}>
        <QuizContainer>        
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>

            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>
          
          <Widget>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>

          <Footer />
        </QuizContainer>
        <GithubCorner projectUrl="https://github.com/DKSecurity99/imersao-react-alura"/>
      </QuizBackground>
    </>
  )
}
