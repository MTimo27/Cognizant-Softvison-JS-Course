import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import AnswersDiagram from './components/AnswersDiagram';
import QuestionForm from './components/QuestionForm';

function App() {
  const socket = io.connect('http://localhost:3001');
  const [answer, setAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);

  //Pune stateul in componente mai jos ca sa nu isi dea rerender

  const handleSubmitAnswer = async () => {
    await socket.emit('send_answer', answer);
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    setAnswered(true);
  };

  useEffect(() => {
    socket.on('receive_answer', (data) => {
      setAnswers((answers) => [...answers, data]);
    });
  }, [socket]);

  return (
    <div className="App">
      {answered ? (
        <h1>Thanks for the answers</h1>
      ) : (
        <QuestionForm
          answer={answer}
          setAnswer={setAnswer}
          handleSubmitAnswer={handleSubmitAnswer}
        />
      )}
      <AnswersDiagram answers={answers} />
    </div>
  );
}

export default App;
