import {connect} from 'react-redux';
import LetterToggle from '../components/LetterToggle';
import { actionToggle } from '../actions';

function mapStateToProps(state) {
    return {
        options: ['characters', 'upperCharacters', 'capitalVowels', 'leetSpeak']
    }
}

function mapDispatchToProps (dispatch) {
    return {
        handleToggle: (text) => {
            console.log(text);
            dispatch(actionToggle(text))
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(LetterToggle);