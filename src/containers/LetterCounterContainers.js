import {connect} from 'react-redux';
import LetterCounters from '../components/LetterCounters';
import { actionNext, actionLast, actionReset } from '../actions';


function mapStateToProps(state) {
    return {
        letters: state.positions.map((position) => state.characters[position])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleNext: (id) => {dispatch(actionNext(id))},
        handleLast: (id) => {dispatch(actionLast(id))},
        handleReset: (id) => {dispatch(actionReset(id))}
    }
}
// I want the click handler to be able to accept an id

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(LetterCounters);