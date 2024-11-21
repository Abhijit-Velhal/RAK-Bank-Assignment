import React from "react";

const Summary = ({ answers, onSubmit }) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer.question}: {answer.answer}</li>
        ))}
      </ul>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Summary;
