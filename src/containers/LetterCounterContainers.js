import {connect} from 'react-redux';
import LetterCounters from '../components/LetterCounters';
import { actionNext, actionLast, actionReset, actionDeleteButton } from '../actions';


function mapStateToProps(state) {
    return {
        letters: state.positions.map((position) => {
                switch (state.currentToggle) {
                    case 'characters':
                        return state.characters[position];
                    case 'upperCharacters':
                        return state.upperCharacters[position];
                    case 'capitalVowels':
                        return state.capitalVowels[position];
                    case 'leetSpeak':
                        return state.leetSpeak[position];
                    default:
                        return state.characters[position];
                }
            }
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleNext: (id) => {dispatch(actionNext(id))},
        handleLast: (id) => {dispatch(actionLast(id))},
        handleReset: (id) => {dispatch(actionReset(id))},
        handleDeleteButton: (id) => {dispatch(actionDeleteButton(id))}
    }
}
// I want the click handler to be able to accept an id

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(LetterCounters);