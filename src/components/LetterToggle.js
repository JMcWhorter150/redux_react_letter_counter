import React from 'react';

export default function LetterToggle({handleToggle, options}) {
    let optionsList = options.map((text, i) => {
        return <option value={text} key={i}>{text}</option>
    });

    return (
        <select onChange={(event) => handleToggle(event.target.value)}>
            {optionsList}
        </select>
    );
}