
// action types
export const NEXT = 'NEXT';
export const LAST = 'LAST';
export const RESET = 'RESET';
export const ADD_BUTTON = 'ADD_BUTTON';
export const DELETE_BUTTON = 'DELETE_BUTTON';

// action constructors
export function actionNext(id) {
    return {
        type: NEXT,
        id
    }
}

export function actionLast(id) {
    return {
        type: LAST,
        id
    }
}

export function actionReset(id) {
    return {
        type: RESET,
        id
    }
}

export function actionAddButton() {
    return {
        type: ADD_BUTTON
    }
}

export function actionDeleteButton(id) {
    return {
        type: DELETE_BUTTON,
        id
    }
}