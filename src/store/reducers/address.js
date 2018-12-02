const defaultState = {
    street: 'reitzstraat',
    number: '14',
    zipCode: '2021 ts',
    state: 'haarlem',
    country: 'netherlands',
    // snapshot: null,
};

const SET_FIELD_TEXT_VALUE = 'SET_FIELD_TEXT_VALUE';
const TAKE_ADDRESS_SNAPSHOT = 'TAKE_ADDRESS_SNAPSHOT';
const APPLY_ADDRESS_SNAPSHOT = 'APPLY_ADDRESS_SNAPSHOT';

export const setFieldTextValue = (value = '', field = '') => {
    return { type: SET_FIELD_TEXT_VALUE, payload: { value, field } };
};

export const takeAddressSnapshot = () => {
    return { type: TAKE_ADDRESS_SNAPSHOT };
};

export const applyAddressSnapshot = () => {
    return { type: APPLY_ADDRESS_SNAPSHOT };
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    // const { snapshot, ...stateWithSnapshot } = state;
    switch (type) {
        case SET_FIELD_TEXT_VALUE:
            if (!payload.field) {
                return { ...state };
            }
            return { ...state, [payload.field]: payload.value };

        // case TAKE_ADDRESS_SNAPSHOT:
        //     return { ...state, snapshot: { ...stateWithSnapshot } };

        // case APPLY_ADDRESS_SNAPSHOT:
        //     return { ...state.snapshot, snapshot: null };

        default:
            return state;
    }
};
