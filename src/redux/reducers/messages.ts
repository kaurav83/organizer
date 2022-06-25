import { AnyAction } from 'redux';
import { messageTypes } from '../types/messages';

const initialState = {
    message: '',
    typeMessage: '',
};

export const messagesReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case messageTypes.SET_MESSAGE:
            return {
                ...state,
                message: action.payload.message,
                typeMessage: action.payload.typeMessage,
            };

        case messageTypes.RESET_MESSAGE:
            return {
                ...state,
                message: '',
                typeMessage: '',
            };

        default:
            return state;
    }
};