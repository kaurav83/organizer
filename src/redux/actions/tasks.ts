import  request from 'axios';
import { AppThunk } from '../../lib/redux/init/store';
import { tasksTypes } from '../types/tasks';
import { ErrorResponse, ITagModel, TaskModel, TaskModelForm } from '../../api/types';
import { api } from '../../api';
import { setMessage, resetMessage } from '../actions/messages';

export const getTasks = (token: string): AppThunk => async(dispatch) => {
    try {
        const { data } = await api.tasks(token);
        dispatch(setTasks(data));
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { statusCode, error, message } = err.response?.data as ErrorResponse;
            if (statusCode === 401) {
                dispatch(setMessage({message, typeMessage: 'error'}));
            } else {
                dispatch(setMessage({message: 'Произошла ошибка при загрузке задач.', typeMessage: 'error'}));
            }
        }   
    } finally {
        dispatch(resetMessage());
    }
};

export const postTask = (task: TaskModelForm, token: string): AppThunk => async(dispatch) => {
    try {
        const { data } = await api.createTask(task, token);

        dispatch(setFetchedTask(data));
        dispatch(setMessage({message: 'Задача добавлена!', typeMessage: 'info'}));
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { statusCode, error, message } = err.response?.data as ErrorResponse;
            
            dispatch(setMessage({message, typeMessage: 'error'}));
        }   
    } finally {
        dispatch(resetMessage());
    }
}

export const updateTask = (task: TaskModelForm, id: string, token: string): AppThunk => async(dispatch) => {
    try {
        const { data }: any = await api.putTask(task, id, token);    
        
        dispatch(setUpdateTask(data.data));
        dispatch(setMessage({message: `Задача с идентификатором ${id} успешно обновлена.`, typeMessage: 'info'}));
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { statusCode, error, message } = err.response?.data as ErrorResponse;
            
            dispatch(setMessage({message, typeMessage: 'error'}));
        }
    } finally {
        dispatch(resetMessage());
    }
}

export const removeTask = (id: string, token: string): AppThunk => async(dispatch) => {
    try {
        await api.deleteTask(id, token);
        dispatch(deleteTaskFromStore(id));
        dispatch(setMessage({message: 'Задача удалена!', typeMessage: 'info'}));
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { statusCode, error, message } = err.response?.data as ErrorResponse;
            
            dispatch(setMessage({message, typeMessage: 'error'}));
        }
    } finally {
        dispatch(resetMessage());
    }
}

export const setTasks = (tasks: TaskModel[]) => {
    return {
        type: tasksTypes.GET_TASKS,
        payload: tasks,
    };
};

export const setFetchedTask = (task: TaskModel) => {
    return {
        type: tasksTypes.SET_TASK,
        payload: task,
    };
};

export const selectTask = (id: string) => {
    return {
        type: tasksTypes.SELECTED_TASK,
        payload: id,
    };
} ;

export const setUpdateTask = (task: TaskModel) => {
    return {
        type: tasksTypes.UPDATED_TASK,
        payload: task,
    };
};

export const deleteTaskFromStore = (id: string) => {
    return {
        type: tasksTypes.DELETE_TASK,
        payload: id,
    }
}
