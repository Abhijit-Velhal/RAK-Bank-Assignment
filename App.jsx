import React from "react";

import Carousel from "./Components/Carousel";
import Step from "./Components/Step";
import Summary from "./Components/Summary";
import { PollProvider, usePoll } from "./context/PollContext";

import axios from "axios";

const App = () => {
  const steps = [
    { title: "How was your week?", options: [{ icon: "👍", label: "Good" }, { icon: "🤔", label: "Neutral" }, { icon: "👎", label: "Bad" }] },
    
  ];

  const { answers, addAnswer } = usePoll();

  const handleSubmit = () => {
    submitAnswers(answers);
  };


const submitAnswers = async (answers) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", answers);
    console.log("Submitted successfully:", response.data);
  } catch (error) {
    console.error("Error submitting answers:", error);
  }
};submitAnswers

  return (
    <PollProvider>
      <Carousel
        steps={steps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            options={step.options}
            onSelect={(label) => addAnswer(step.title, label)}
          />
        ))}
        onComplete={() => <Summary answers={answers} onSubmit={handleSubmit} />}
      />
    </PollProvider>
  );
};

export default App;
