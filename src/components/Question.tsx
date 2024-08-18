import React, { useState } from 'react';

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
        <div style={{ marginBottom: '1em' }}>
            <p>{questionText}</p>
            <div>
                {[0, 1, 2, 3, 4].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleScoreChange(value)}
                        style={{
                            marginRight: '0.5em',
                            padding: '0.5em 1em',
                            backgroundColor: score === value ? '#4CAF50' : '#e0e0e0',
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