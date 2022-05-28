import React from 'react';

function QuestionForm({
  answer,
  setAnswer,
  handleSubmitAnswer,
}) {
  return (
    <div>
      <h1>Are you a developer?</h1>
      <input
        type="text"
        placeholder="Type your answer here"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleSubmitAnswer}>Submit</button>
    </div>
  );
}

export default QuestionForm;
