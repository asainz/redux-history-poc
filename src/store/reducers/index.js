import { combineReducers } from 'redux';
// import undoable from 'redux-undo';

// import snapshot from './snapshot';

import address from './address';

export default combineReducers({
    address,
    // address: snapshot(address),
});
