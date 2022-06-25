import axios, { AxiosResponse } from 'axios';
import { ISignUp } from '../components/SignUp/validation';
import { 
    AuthHeader,
    ITagModel, 
    ILoginFormShape, 
    ILogin, 
    TaskModel,
    TaskModelForm,
    IProfile,
} from './types'

export const api = Object.freeze({
    signUp(user: ISignUp) {
            const data = axios.post<ISignUp, AxiosResponse<ILogin>>(
            `${process.env.REACT_APP_API_URL}/v2/todos/auth/registration`,
            user,
        )

        return data;
    },

    login(credentials: ILoginFormShape) {
        const { email, password } = credentials;
        const data = axios.get<ILoginFormShape, AxiosResponse<ILogin>>(
            `${process.env.REACT_APP_API_URL}/v2/todos/auth/login`,
            {
                headers: {
                    Authorization: `Basic ${window.btoa(`${email}:${password}`)}`
                }
            }
        )

        return data;
    },

    logout(token: string) {
        const config: AuthHeader = {};
        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }

        const data = axios.get(
            `${process.env.REACT_APP_API_URL}/v2/todos/auth/logout`,
            config
        )

        return data;
    },

    profile(token: string) {
        const data = axios.get<IProfile>(
            `${process.env.REACT_APP_API_URL}/v2/todos/auth/profile`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        return data;
    },

    tags() {
        const data = axios.get<ITagModel[]>(
            `${process.env.REACT_APP_API_URL}/v2/todos/tags`,
        )

        return data;
    },

    tasks(token: string) {
        const data = axios.get<TaskModel[]>(
            `${process.env.REACT_APP_API_URL}/v2/todos/tasks`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        )

        return data;
    },

    createTask(task: TaskModelForm, token?: string) {
        const config: AuthHeader = {};
        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }

        const data = axios.post<TaskModelForm, AxiosResponse<TaskModel>>(
            `${process.env.REACT_APP_API_URL}/v2/todos/tasks`,
            task,
            config
        )

        return data;
    },

    putTask(task: TaskModelForm, id: string, token: string) {
        const config: AuthHeader = {};
        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }

        const data = axios.put<TaskModelForm, AxiosResponse<TaskModel>>(
            `${process.env.REACT_APP_API_URL}/v2/todos/tasks/${id}`,
            task,
            config,
        )

        return data;
    },

    deleteTask(id: string, token: string) {
        const config: AuthHeader = {};
        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }

        const data = axios.delete(
            `${process.env.REACT_APP_API_URL}/v2/todos/tasks/${id}`,
            config
        )

        return data;
    }
});
