
// action types
export const NEXT = 'NEXT';
export const LAST = 'LAST';
export const RESET = 'RESET';

// action constructors
export function actionNext() {
    return {
        type: NEXT
    }
}

export function actionLast() {
    return {
        type: LAST
    }
}

export function actionReset() {
    return {
        type: RESET
    }
}

