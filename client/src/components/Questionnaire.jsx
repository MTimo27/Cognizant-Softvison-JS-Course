import React, { useEffect, useState } from 'react';
import AnswersDiagram from './AnswersDiagram';
import QuestionForm from './QuestionForm';

function Questionnaire({ socket }) {
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleSubmitAnswer = async (data) => {
    await socket.emit('send_answer', data);

    setAnswers((prevAnswers) => {
      let index = 0;
      const array = prevAnswers;
      for (const [i, answer] of array) {
        if (answer.body === data) {
          index = i;
        }
      }
      if (index) {
        array[index].appearances++;
      } else {
        array.push({
          body: data,
          color:
            '#' +
            Math.floor(Math.random() * 16777215).toString(
              16
            ),
          appearance: 1,
        });
      }
      return array;
    });

    setAnswered(true);
  };

  useEffect(() => {
    console.log(answers);
    socket.on('receive_answer', (data) => {
      setAnswers((prevAnswers) => {
        let index = 0;
        const array = prevAnswers;
        console.log(array);
        for (const [i, answer] of array) {
          if (answer.body === data) {
            index = i;
          }
        }
        if (index) {
          array[index].appearances++;
        } else {
          array.push({
            body: data,
            color:
              '#' +
              Math.floor(Math.random() * 16777215).toString(
                16
              ),
            appearance: 1,
          });
        }
        return array;
      });
    });
  }, [socket]);

  return (
    <div>
      {answered ? (
        <h1>Thanks for the answer</h1>
      ) : (
        <QuestionForm
          handleSubmitAnswer={handleSubmitAnswer}
        />
      )}
      <AnswersDiagram answers={answers} />
    </div>
  );
}

export default Questionnaire;
