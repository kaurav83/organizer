import  request from 'axios';
import { AppThunk } from '../../lib/redux/init/store';
import { tagsType } from '../types/tags';
import { ErrorResponse, ITagModel } from '../../api/types';
import { api } from '../../api';
import { setMessage, resetMessage } from '../actions/messages';

export const getTags = (): AppThunk => async(dispatch) => {
    try {
        const { data } = await api.tags();
        dispatch(setTags(data));
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { statusCode, error, message } = err.response?.data as ErrorResponse;
            if (statusCode === 500) {
                dispatch(setMessage({message, typeMessage: 'error'}));
            } else {
                dispatch(setMessage({message: 'Произошла ошибка при загрузке тегов.', typeMessage: 'error'}));
            }
        }   
    } finally {
        dispatch(resetMessage());
    }
};

export const setTags = (tags: ITagModel[]) => {
    return {
        type: tagsType.SET_TAGS,
        payload: tags
    };
};