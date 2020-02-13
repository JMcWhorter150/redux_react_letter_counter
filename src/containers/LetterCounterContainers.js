import {connect} from 'react-redux';
import LetterCounters from '../components/LetterCounters';
import { actionNext, actionLast, actionReset, actionDeleteButton } from '../actions';


function mapStateToProps(state) {
    return {
        letters: state.positions.map((position) => {
            if (position === 0) {
                return "4";
            } else if (position === 4) {
                return "3";
            } else if (position === 8) {
                return "1";
            } else if (position === 14) {
                return "0";
            } else if (position === 20) {
                return state.upperCharacters[position];
            } else {
                return state.characters[position];
            }
        })
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