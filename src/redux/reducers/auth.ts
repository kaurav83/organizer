import { AnyAction } from 'redux';
import { userTypes } from '../types/auth';

const initialState = {
    token: '',
};

export const signUpReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case userTypes.SET_TOKEN:
            return {
                ...state,
                token: action.payload,
                
            };
        case userTypes.RESET_TOKEN:
            return {
                ...state,
                token: action.payload,
            }

        default:
            return state;
    }
};