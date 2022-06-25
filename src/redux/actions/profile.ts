import  request from 'axios';
import { AppThunk } from '../../lib/redux/init/store';
import { profileType } from '../types/profile';
import { ErrorResponse, IProfile } from '../../api/types';
import { api } from '../../api';
import { setMessage, resetMessage } from '../actions/messages';

export const getProfile = (token: string): AppThunk => async(dispatch) => {
    try {
        const { data } = await api.profile(token);
        dispatch(setMessage({message: `Мы рады, что вы вернулись, ${data.name}`, typeMessage: 'info'}));
        dispatch(setProfile(data));
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { statusCode, error, message } = err.response?.data as ErrorResponse;
            
            dispatch(setMessage({message, typeMessage: 'error'}));
        }
    } finally {
        dispatch(resetMessage());
    }
};

export const setProfile = (profile: IProfile) => {
    return {
        type: profileType.GET_PROFILE,
        payload: profile
    };
};