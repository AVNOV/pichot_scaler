import React, { useState } from 'react';

export const questions = [
    "Je manque d'énergie",
    "Tout demande un effort",
    "Je me sens faible à certains endroit du corp",
    "J'ai les bras ou les jambes lourdes",
    "Je me sens fatigué sans raison",
    "J'ai envie de m'allogner ou de me reposer",
    "J'ai du mal à me concentrer",
    "Je me sens fatigué, lourd et raid"
];

interface QuestionProps {
    questionText: string;
    onScoreChange: (score: number) => void;
}

const Question: React.FC<QuestionProps> = ({ questionText, onScoreChange }) => {
    const [score, setScore] = useState<number | null>(null);

    const handleScoreChange = (value: number) => {
        setScore(value);
        onScoreChange(value);
    };

    return (
        <div style={{ marginBottom: '1em', paddingLeft: '1.5em' }}>
            <p>{questionText}</p>
            <div>
                {[0, 1, 2, 3, 4].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleScoreChange(value)}
                        style={{
                            marginRight: '0.5em',
                            padding: '0.5em 1em',
                            backgroundColor: score === value ? '#DC7633' : '#E0E0E0',
                            color: score === value ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;