import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

function LoadingScreen() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Desafio loading]
      </Widget.Content>
    </Widget>
  )
}

function QuizPage({}) {
  return (
    <QuizBackground>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h3>Pergunta 1 de {`${db.questions.length}`}</h3>
          </Widget.Header>
          
          <img 
            alt="Descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover'
            }}
            src={db.bgSecond}
          />
          <Widget.Content>
            <h2>Titúlo</h2>
            <p>Descrição</p>

            <Button 
              disabled={false}
              label="Confimar"
              type="button"
            />
          </Widget.Content>
        </Widget>
        <LoadingScreen />
      </QuizContainer>
    </QuizBackground>
  )
}

export default QuizPage;
