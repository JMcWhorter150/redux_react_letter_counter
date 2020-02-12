import { NEXT, LAST, RESET } from "./actions";


const defaultState = {
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    position: 12
};

function letterCount(state=defaultState, action) {
    const newState = {...state};

    switch (action.type) {
        case NEXT:
            newState.position >= 25 ? newState.position = 0 : ++newState.position;
            break;
        case LAST:
            newState.position <= 0 ? newState.position = 25 : --newState.position;
            break;
        case RESET:
            newState.position = 12;
            break;
        default:
            break;
    }

    return newState;
}

export default letterCount;