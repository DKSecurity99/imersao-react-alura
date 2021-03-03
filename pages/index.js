import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GithubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [ name, setName ] = useState('');

  function handlerChange(event) {
    const value = event.target.value;

    setName(value);
  }

  function handlerSubmit(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

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
              
              <form onSubmit={handlerSubmit}>
                <Input 
                  onChange={handlerChange} 
                  placeholder="Defina um nome para jogar!" 
                  name="name"
                  value={name}
                  type="text"
                />
                <Button 
                  disabled={name.length === 0} 
                  label={`Jogar ${name}`}
                  type="submit"
                />
              </form>

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
