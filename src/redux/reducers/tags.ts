import { AnyAction } from 'redux';
import { tagsType } from '../types/tags';

const initialState = {
    tags: [],
};

export const tagsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case tagsType.SET_TAGS:
            return {
                ...state,
                tags: action.payload,
            };

        default:
            return state;
    }
};