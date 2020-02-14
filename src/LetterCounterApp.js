import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import letterCount from './reducers';
import LetterCounters from './containers/LetterCounterContainers';
import AddButton from './containers/AddButtonContainer';
import LetterToggle from './containers/LetterToggleContainer';

const store = createStore(letterCount);

export default function LetterCounterApp() {
    return (
        <Provider store={store}>
            <LetterCounters />
            <br></br>
            <AddButton />
            <br />
            <LetterToggle />
        </Provider>
    );
}