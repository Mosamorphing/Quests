import React from 'react';
import useQuiz from './useQuiz';

const questions = [
  { id: 1, text: "1. What is a smart contract?", options: ["A legal document", "A self-executing contract with code", "A type of cryptocurrency"], correctAnswer: "A self-executing contract with code" },
  { id: 2, text: "2. Which blockchain introduced smart contracts?", options: ["Bitcoin", "Ethereum", "Ripple"], correctAnswer: "Ethereum" },
  { id: 3, text: "3. Which programming language is primarily used for writing Ethereum smart contracts?", options: ["Solidity", "Python", "JavaScript"], correctAnswer: "Solidity" },
  { id: 4, text: "4. What is the Ethereum Virtual Machine (EVM)?", options: ["A physical computer", "A decentralized computing environment", "A mining algorithm"], correctAnswer: "A decentralized computing environment" },
  { id: 5, text: "5. What does 'gas' refer to in Ethereum?", options: ["Fuel for mining rigs", "Transaction fees", "Network bandwidth"], correctAnswer: "Transaction fees" },
  { id: 6, text: "6. Which function prevents reentrancy attacks in Solidity?", options: ["require()", "revert()", "checks-effects-interactions pattern"], correctAnswer: "checks-effects-interactions pattern" },
  { id: 7, text: "7. What is the main purpose of a smart contract?", options: ["To replace lawyers", "To automate and enforce agreements", "To create NFTs"], correctAnswer: "To automate and enforce agreements" },
  { id: 8, text: "8. Which of these is a common smart contract vulnerability?", options: ["Buffer overflow", "Integer overflow", "SQL injection"], correctAnswer: "Integer overflow" },
  { id: 9, text: "9. What does 'immutable' mean in the context of smart contracts?", options: ["Cannot be modified after deployment", "Can be upgraded anytime", "Can only be changed by the contract owner"], correctAnswer: "Cannot be modified after deployment" },
  { id: 10, text: "10. What is an ERC-20 token?", options: ["A type of NFT", "A standard for fungible tokens on Ethereum", "A Bitcoin fork"], correctAnswer: "A standard for fungible tokens on Ethereum" },
  { id: 11, text: "11. What role do oracles play in smart contracts?", options: ["Generate new tokens", "Provide external data", "Validate mining operations"], correctAnswer: "Provide external data" },
  { id: 12, text: "12. Which of these is a blockchain platform that supports smart contracts?", options: ["Ethereum", "MySQL", "Apache"], correctAnswer: "Ethereum" },
  { id: 13, text: "13. What does the 'msg.sender' keyword represent in Solidity?", options: ["The contract creator", "The address calling the contract", "The miner of the block"], correctAnswer: "The address calling the contract" },
  { id: 14, text: "14. What happens when a smart contract runs out of gas?", options: ["It continues execution", "It fails and reverts changes", "It switches to another contract"], correctAnswer: "It fails and reverts changes" },
  { id: 15, text: "15. Which Solidity function is used to send Ether?", options: ["send()", "transfer()", "Both"], correctAnswer: "Both" },
  { id: 16, text: "16. What does 'state variable' mean in Solidity?", options: ["A variable stored permanently on the blockchain", "A temporary variable", "A JavaScript variable"], correctAnswer: "A variable stored permanently on the blockchain" },
  { id: 17, text: "17. Which Solidity keyword is used to define a function that does not modify state?", options: ["constant", "pure", "view"], correctAnswer: "view" },
  { id: 18, text: "18. What is the main advantage of using smart contracts?", options: ["Lower transaction fees", "Elimination of intermediaries", "Better user interface"], correctAnswer: "Elimination of intermediaries" },
  { id: 19, text: "19. What is a DAO in the context of blockchain?", options: ["A centralized financial institution", "A decentralized autonomous organization", "A type of NFT"], correctAnswer: "A decentralized autonomous organization" },
  { id: 20, text: "20. Which Solidity visibility modifier makes a function accessible only inside the contract?", options: ["public", "private", "external"], correctAnswer: "private" }

];

function App() {
  const {
    currentQuestionIndex,
    answers,
    handleAnswerChange,
    goToNextQuestion,
    goToPreviousQuestion,
    isLastQuestion,
    calculateScore,
    resetQuiz,
  } = useQuiz(questions);

  const currentQuestion = questions[currentQuestionIndex];
  const score = calculateScore(questions);

  if (isLastQuestion && score !== null) {
    return (
      <div className="quiz-container">
        <h1>Quiz Completed!</h1>
        <h2>Your Score: {score} / {questions.length}</h2>
        <button onClick={resetQuiz}>Retake Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Smart Contract Quiz</h1>
      <div className="question">
        <h2>{currentQuestion.text}</h2>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={answers[currentQuestion.id] === option}
                onChange={() => handleAnswerChange(currentQuestion.id, option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <div className="navigation">
        {currentQuestionIndex > 0 && (
          <button onClick={goToPreviousQuestion}>Previous</button>
        )}
        {!isLastQuestion ? (
          <button onClick={goToNextQuestion}>Next</button>
        ) : (
          <button onClick={goToNextQuestion}>Finish</button>
        )}
      </div>
    </div>
  );
}

export default App;