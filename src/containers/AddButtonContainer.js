import {connect} from 'react-redux';
import AddButton from '../components/AddButton';
import {actionAddButton} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        handleAddButton: () => {dispatch(actionAddButton())}
    }
}

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(AddButton);