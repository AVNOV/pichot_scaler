import React, { useState, useEffect } from 'react';
import Question, { questions } from './components/Question';
import IntroModal from './components/IntroModal';
import ResultModal from './components/ResultModal';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
  const [scores, setScores] = useState<number[]>(Array(8).fill(null));

  const totalScore = scores.reduce((acc, score) => acc + (score !== null ? score : 0), 0);

  const handleScoreChange = (index: number, score: number) => {
    const newScores = [...scores];
    newScores[index] = score;
    setScores(newScores);
  };

  const allAnswered = scores.every(score => score !== null);

  const [isIntroModalOpen, setIntroModalOpen] = useState(true);
  const [isResultModalOpen, setResultModalOpen] = useState(false);

  const closeIntroModal = () => setIntroModalOpen(false);
  const toggleResultModal = () => setResultModalOpen(!isResultModalOpen);

  useEffect(() => {
    setIntroModalOpen(true);
  }, []);

  const getCategory = (total: number) => {
    if (total <= 8) return "Pas de fatigue significative";
    if (total <= 16) return "Fatigue légère";
    if (total <= 24) return "Fatigue modérée";
    return "Fatigue sévère";
  };

  return (
    <div className="app-container">
      <Header />
      <main className="questions-container">
        {questions.map((question, index) => (
          <Question
            key={index}
            questionText={question}
            onScoreChange={(score) => handleScoreChange(index, score)}
          />
        ))}
        <button
          className="result-button"
          onClick={toggleResultModal}
          disabled={!allAnswered}
          style={{
            backgroundColor: allAnswered ? '#6E72C8' : '#d3d3d3',
            cursor: allAnswered ? 'pointer' : 'not-allowed',
          }}
        >
          Voir le résultat
        </button>
      </main>

      <IntroModal isOpen={isIntroModalOpen} onClose={closeIntroModal} />
      <ResultModal 
        isOpen={isResultModalOpen} 
        onClose={toggleResultModal} 
        totalScore={totalScore} 
        category={getCategory(totalScore)} 
      />
    </div>
  );
};

export default App;
