import { useState } from 'react';

const useQuiz = (questions) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Calculate score when the quiz is finished
      const newScore = calculateScore(questions);
      setScore(newScore);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const calculateScore = (questions) => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScore(null);
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return {
    currentQuestionIndex,
    answers,
    handleAnswerChange,
    goToNextQuestion,
    goToPreviousQuestion,
    isLastQuestion,
    calculateScore,
    resetQuiz,
  };
};

export default useQuiz;