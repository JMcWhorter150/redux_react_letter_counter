import { NEXT, LAST, RESET, ADD_BUTTON, DELETE_BUTTON } from "./actions";


const defaultState = {
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    positions: []
};

function letterCount(state=defaultState, action) {
    const newState = {...state};
    switch (action.type) {
        case NEXT:
            newState.positions[action.id] > 24 ? newState.positions[action.id] = 0 : ++newState.positions[action.id];
            break;
        case LAST:
            newState.positions[action.id] < 1 ? newState.positions[action.id] = 25 : --newState.positions[action.id];
            break;
        case RESET:
            newState.positions[action.id] = 12;
            break;
        case ADD_BUTTON:
            newState.positions.push(12);
            break;
        case DELETE_BUTTON:
            newState.positions.splice(action.id, 1);
        default:
            break;
    }

    return newState;
}

export default letterCount;