import { AnyAction } from 'redux';
import { cardTypes } from '../types/taskCard';

const initialState = {
    openForm: false,
    newTask: false,
};

export const cardReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case cardTypes.SET_OPEN:
            return {
                ...state,
                openForm: action.payload.openForm,
                newTask: action.payload.newTask,
            }

        default:
            return state;
    }
};