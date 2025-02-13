import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>QuizCompleted!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">

      <Question
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
      
    </div>
  )
};

//   // Create a copy of the answers array for the current question
//   const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
//   // Shuffle the answers array randomly
//   shuffledAnswers.sort(() => Math.random() - 0.5);

//   return (
//     <div id="quiz">
//       <div id="question">
//         <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />

//         <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
//         <ul id="answers">
//           {shuffledAnswers.map((answer) => (
//             <li key={answer} className="answer">
//               <button onClick={() => handleSelectAnswer(answer)}>
//                 {answer}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
