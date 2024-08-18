import React, { useState } from 'react';
import Question, { questions } from './components/Question';
import './App.css'; // Assurez-vous d'importer les styles CSS

const App: React.FC = () => {
  const [scores, setScores] = useState<number[]>(Array(8).fill(0));
  const [isModalOpen, setModalOpen] = useState(false);

  const totalScore = scores.reduce((acc, score) => acc + score, 0);

  const handleScoreChange = (index: number, score: number) => {
    const newScores = [...scores];
    newScores[index] = score;
    setScores(newScores);
  };

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Échelle de Fatigue de Pichot</h1>
      </header>
      <main className="questions-container">
        {questions.map((question, index) => (
          <Question
            key={index}
            questionText={question}
            onScoreChange={(score) => handleScoreChange(index, score)}
          />
        ))}
        <button className="result-button" onClick={toggleModal}>
          Voir le résultat
        </button>
      </main>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Résultat</h2>
            <p>Votre score total est : {totalScore}</p>
            <button onClick={toggleModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
