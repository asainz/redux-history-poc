import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import address from './address';

export default combineReducers({
    address: undoable(address),
});
