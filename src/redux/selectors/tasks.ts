import { RootState } from '../../lib/redux/init/store';
import { TaskModel } from '../../api/types';

export const allTasks = (state: RootState): TaskModel[] => {
    return state.tasksReducer.tasks;
};

export const getTask = (state: RootState): string => {
    return state.tasksReducer.task;
};
