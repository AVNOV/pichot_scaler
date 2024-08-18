import React, { useState } from 'react';
import Question from './components/Question';

const questions = [
  "Je manque d'énergie",
  "Tout demande un effort",
  "Je me sens faible à certains endroit du corp",
  "J'ai les bras ou les jambes lourdes",
  "Je me sens fatigué sans raison",
  "J'ai envie de m'allogner ou de me reposer",
  "J'ai du mal à me concentrer",
  "Je me sens fatigué, lourd et raid"
];

const App: React.FC = () => {
  const [scores, setScores] = useState<number[]>(Array(8).fill(0));
  
  const totalScore = scores.reduce((acc, score) => acc + score, 0);

  const handleScoreChange = (index: number, score: number) => {
    const newScores = [...scores];
    newScores[index] = score;
    setScores(newScores);
  };


  return (
    <div style={{ padding: '2em' }}>
      <h1>Échelle de Fatigue de Pichot</h1>
      {questions.map((question, index) => (
        <Question
          key={index}
          questionText={question}
          onScoreChange={(score) => handleScoreChange(index, score)}
        />
      ))}
      <div style={{ marginTop: '2em', fontWeight: 'bold' }}>
        Score total : {totalScore}
      </div>
    </div>
  );
};

export default App;