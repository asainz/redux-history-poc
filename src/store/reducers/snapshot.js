export const SNAPSHOT_INIT = '@@snaphot/INIT';
export const TAKE_SNAPSHOT = '@@snaphot/TAKE';
export const APPLY_SNAPSHOT = '@@snaphot/APPLY';

export const initSnapshotAction = () => ({
    type: SNAPSHOT_INIT,
});

export const takeSnapshotAction = () => ({
    type: TAKE_SNAPSHOT,
});

export const applySnapshotAction = () => ({
    type: APPLY_SNAPSHOT,
});

export default function snapshot(reducer, rawConfig = {}) {
    const config = { ...rawConfig };

    return (state, action) => {
        let stateWithSnapshot;
        let stateWithoutSnapshot = state;
        if (typeof state === 'undefined') {
            // get the initial state from the child reducer
            const stateWithoutSnapshot = reducer(state, { type: SNAPSHOT_INIT });
            stateWithSnapshot = { ...stateWithoutSnapshot, __snapshot: null };
        } else {
            stateWithSnapshot = { ...state, __snapshot: { ...state.__snapshot } };
        }

        switch (action.type) {
            case TAKE_SNAPSHOT:
                stateWithSnapshot = { ...stateWithoutSnapshot, __snapshot: { ...state } };
                break;

            case APPLY_SNAPSHOT:
                stateWithSnapshot = { ...state.__snapshot, __snapshot: null };
                break;
        }

        return reducer(stateWithSnapshot, action);
    };
}
