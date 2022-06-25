import { AnyAction } from 'redux';
import { profileType } from '../types/profile';

const initialState = {
    profile: {},
};

export const profileReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case profileType.GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };

        default:
            return state;
    }
};