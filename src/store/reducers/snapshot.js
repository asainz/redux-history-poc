const snapshotInitialAction = {
    type: 'SNAPSHOT_INIT',
};

export default function snapshot(reducer, rawConfig = {}) {
    const config = { ...rawConfig };

    return (state, action) => {
        let stateWithSnapshot;
        if (typeof state === 'undefined') {
            // get the initial state from the child reducer
            const initialState = reducer(state, snapshotInitialAction);
            stateWithSnapshot = { ...initialState, __snapshot: null };
        } else {
            stateWithSnapshot = { ...state, __snapshot: null };
        }

        return reducer(stateWithSnapshot, action);
    };
}
