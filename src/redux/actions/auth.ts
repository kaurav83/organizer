/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import  request from 'axios';
import { AppThunk } from '../../lib/redux/init/store';
import { userTypes } from '../types/auth';
import { ISignUp } from '../../components/SignUp/validation';
import { ILogin, ILoginFormShape, ErrorResponse } from '../../api/types';
import { api } from '../../api';
import { setLoading } from '../actions/loading';
import { setMessage, resetMessage } from '../actions/messages';

export const signUpNewUser = (user: ISignUp): AppThunk => async(dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await api.signUp(user);
        localStorage.setItem('token', data.data);
        dispatch(setUserToken(data));
        dispatch(setMessage({message: 'Мы рады поприветствовать нового пользователя', typeMessage: 'success'}));
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { statusCode, error, message } = err.response?.data as ErrorResponse;
            if (statusCode === 400) {
                dispatch(setMessage({message, typeMessage: 'error'}));
            } else {
                dispatch(setMessage({message: 'Ошибка запроса. Повторите через несколько минут или обратитесь к администратору.', typeMessage: 'error'}));
            }
        }
            
    } finally {
        dispatch(setLoading(false));
        dispatch(resetMessage());
    }
};

export const loginUser = (credentials: ILoginFormShape): AppThunk => async(dispatch) => {
    try {
        dispatch(setLoading(true));
        const  { data }  = await api.login(credentials);
        localStorage.setItem('token', data.data);
        dispatch(setUserToken(data));
        dispatch(setMessage({message: 'Добро пожаловать!', typeMessage: 'success'}));
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { statusCode, error, message } = err.response?.data as ErrorResponse;
            if (statusCode === 401) {
                dispatch(setMessage({message, typeMessage: 'error'}));
            } else {
                dispatch(setMessage({message: 'Ошибка запроса. Повторите через несколько минут или обратитесь к администратору.', typeMessage: 'error'}));
            }
        }
    } finally {
        dispatch(setLoading(false));
        dispatch(resetMessage());
    }
};

export const logoutUser = (token: string): AppThunk => async(dispatch) => {
    try {
        await api.logout(token);
        dispatch(setLoading(true));
        dispatch(resetUserToken(''));
        dispatch(setMessage({message: 'Возвращайтесь поскорее;) Мы будет скучать', typeMessage: 'info'}));
    } catch (err) {
        if (request.isAxiosError(err) && err.response) {
            const { statusCode, error, message } = err.response?.data as ErrorResponse;
            
            dispatch(setMessage({message, typeMessage: 'error'}));
        }
    } finally {
        dispatch(setLoading(false));
        dispatch(resetMessage());
    }
}

export const setUserToken = (token: ILogin) => {
    return {
        type: userTypes.SET_TOKEN,
        payload: token.data
    };
};

export const resetUserToken = (token: string ) => {
    return {
        type: userTypes.RESET_TOKEN,
        payload: token
    };
};
