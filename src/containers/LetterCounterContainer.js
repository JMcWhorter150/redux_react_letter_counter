import {connect} from 'react-redux';
import LetterCounter from '../components/LetterCounter';
import { actionNext, actionLast, actionReset } from '../actions';


function mapStateToProps(state) {
    return {
        letter: state.characters[state.position]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleNext: () => {dispatch(actionNext())},
        handleLast: () => {dispatch(actionLast())},
        handleReset: () => {dispatch(actionReset())}
    }
}


const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(LetterCounter);