import { NEXT, LAST, RESET, ADD_BUTTON, DELETE_BUTTON, TOGGLE } from "./actions";


const defaultState = {
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperCharacters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    capitalVowels: ['A', 'b', 'c', 'd', 'E', 'f', 'g', 'h', 'I', 'j', 'k', 'l', 'm', 'n', 'O', 'p', 'q', 'r', 's', 't', 'U', 'v', 'w', 'x', 'y', 'z'],
    leetSpeak: ["@", "B", "C", "D", "3", "F", "G", "H", "1", "J", "K", "1", "M", "N", "0", "P", "Q", "R", "5", "7", "U", "V", "W", "X", "Y", "Z"],
    positions: [],
    currentToggle: 'characters'
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
            break;
        case TOGGLE:
            newState.currentToggle = action.payload;
            break;
        default:
            break;
    }

    return newState;
}

export default letterCount;