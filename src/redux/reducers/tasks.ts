import { AnyAction } from 'redux';
import { tasksTypes } from '../types/tasks';
import { TaskModel } from '../../api/types';

const initialState = {
    tasks: [],
    task: '',
};

export const tasksReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case tasksTypes.GET_TASKS:
            return {
                ...state,
                tasks: action.payload.data,
            };
        case tasksTypes.SET_TASK:
            return {
                ...state,
                tasks: [action.payload.data, ...state.tasks],
            }
        case tasksTypes.SELECTED_TASK:
            return {
                ...state,
                task: action.payload,
            }
        case tasksTypes.UPDATED_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task: TaskModel) => task.id === action.payload.id ? action.payload : task),
            }
        case tasksTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task: TaskModel) => task.id !== action.payload),
            }

        default:
            return state;
    }
};