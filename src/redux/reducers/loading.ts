import { AnyAction } from 'redux';
import { loadingTypes } from '../types/loading';

const initialState = {
    loading: false,
};

export const loadingReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case loadingTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            }

        default:
            return state;
    }
};