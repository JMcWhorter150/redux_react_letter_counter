import React from 'react';

export default function LetterCounter({letter, handleLast, handleNext, handleReset, handleDeleteButton, index }) {
    return (
        <div>
            <h1>{letter}</h1>
            <button onClick={() => {handleLast(index)}}>-</button>
            <button onClick={() => {handleNext(index)}}>+</button>
            <button onClick={() => {handleReset(index)}}>Reset</button>
            <button onClick={() => {handleDeleteButton(index)}}>Delete</button>
         </div>

    );
}