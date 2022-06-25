import { RootState } from '../../lib/redux/init/store';

export const getMessage = (state: RootState): string => {
    return state.messagesReducer.message;
};

export const getTypeMessage = (state: RootState): string => {
    return state.messagesReducer.typeMessage;
};