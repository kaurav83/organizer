import { RootState } from '../../lib/redux/init/store';

export const getStateCardOpenForm = (state: RootState): boolean => {
    return state.cardReducer.openForm;
};

export const getStateCardNewTask = (state: RootState): boolean => {
    return state.cardReducer.newTask;
}