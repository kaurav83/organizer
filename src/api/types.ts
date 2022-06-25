export type AuthHeader = {
    headers?: {
        authorization: string;
    }
};

export interface ILogin {
    data: string;
}

export interface ISignUpWithToken {
    name: string;
    email: string;
    token: string;
}

export interface ILoginFormShape {
    email: string;
    password: string;
}

export interface IProfile {
    name: string;
    email: string;
    created: string;
    id: string;
}

export enum TagEnum {
    SKETCH = 'Sketch',
    SPOTIFY = 'Spotify',
    DRIBBLE = 'Dribble',
    BEHANCE = 'Behance',
    UX = 'UX',
}

export interface ITagModel {
    id: string;
    bg: string;
    color: string;
    name: TagEnum;
}

export type ErrorResponse = {
    error: string
    message: string
    statusCode: number
}

export type TaskModel = {
    id: string
    completed?: boolean
    title: string
    description: string
    deadline: string
    tag: ITagModel
}

export type TaskModelForm = {
    completed?: boolean
    deadline: string
    description: string
    tag: string
    title: string
}