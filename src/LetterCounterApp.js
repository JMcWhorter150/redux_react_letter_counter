import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import letterCount from './reducers';
import LetterCounters from './containers/LetterCounterContainers';
import AddButton from './containers/AddButtonContainer';

const store = createStore(letterCount);

export default function LetterCounterApp() {
    return (
        <Provider store={store}>
            <LetterCounters />
            <AddButton />
        </Provider>
    );
}