import {connect} from 'react-redux';
import AddButton from '../components/AddButton';
import {actionAddButton} from '../actions';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        handleAddButton: () => {dispatch(actionAddButton())}
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(AddButton);