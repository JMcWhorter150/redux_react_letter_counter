import React from 'react';

export default function LetterCounter({letter, handleLast, handleNext, handleReset }) {
    return (
        <div>
            <h1>{letter}</h1>
            <button onClick={handleLast}>-</button>
            <button onClick={handleNext}>+</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}