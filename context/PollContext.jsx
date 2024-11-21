import React, { createContext, useContext, useState } from "react";

const PollContext = createContext();

export const usePoll = () => {
  return useContext(PollContext);
};

export const PollProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  const addAnswer = (question, answer) => {
    setAnswers((prev) => [...prev, { question, answer }]);
  };

  return (
    <PollContext.Provider value={{ answers, addAnswer }}>
      {children}
    </PollContext.Provider>
  );
};
