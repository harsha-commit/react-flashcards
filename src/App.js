import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Card
          onClick={() => {
            setSelectedId((prevId) => {
              if (prevId === question.id) {
                return 0;
              }
              return question.id;
            });
          }}
          className={question.id === selectedId ? "selected" : ""}
          question={question}
        />
      ))}
    </div>
  );
}

function Card(questionObj) {
  const { question, answer } = questionObj.question;
  const [message, setMessage] = useState(question);

  console.log(question, answer);

  function messageHandler() {
    if (message === question) {
      setMessage(answer);
    } else {
      setMessage(question);
    }
  }

  return (
    <div
      className={questionObj.className}
      onClick={() => {
        messageHandler();
        questionObj.onClick();
      }}
    >
      {message}
    </div>
  );
}
