import React from 'react';
import LetterCounter from './LetterCounter';

export default function LetterCounters({letters, handleLast, handleNext, handleReset, handleDeleteButton}) {
    return (
        <div>
            {letters.map((letter, i) => (
                <LetterCounter key={i} letter={letter} index={i} handleDeleteButton={handleDeleteButton} handleLast={handleLast} handleNext={handleNext} handleReset={handleReset} />
            ))}
        </div>
    );
}