import React, { useState } from 'react';

function QuestionForm({ handleSubmitAnswer }) {
  const [answer, setAnswer] = useState('');
  return (
    <div>
      <h1>Are you a developer?</h1>
      <input
        type="text"
        placeholder="Type your answer here"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={() => handleSubmitAnswer(answer)}>
        Submit
      </button>
    </div>
  );
}

export default QuestionForm;
