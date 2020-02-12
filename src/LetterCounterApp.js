import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import letterCount from './reducers';
import LetterCount from './containers/LetterCounterContainer';

const store = createStore(letterCount);

export default function LetterCounterApp() {
    return (
        <Provider store={store}>
            <LetterCount />
        </Provider>
    );
}