const defaultState = {
    street: 'reitzstraat',
    number: '14',
    zipCode: '2021 ts',
    state: 'haarlem',
    country: 'netherlands',
};

const SET_FIELD_TEXT_VALUE = 'SET_FIELD_TEXT_VALUE';

export const setFieldTextValue = (value = '', field = '') => {
    return { type: SET_FIELD_TEXT_VALUE, payload: { value, field } };
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_FIELD_TEXT_VALUE:
            if (!payload.field) {
                return { ...state };
            }
            return { ...state, [payload.field]: payload.value };
        default:
            return state;
    }
};
