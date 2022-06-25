/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { messageTypes } from '../types/messages';

type Message = {
    message: string
    typeMessage: string
}

export const setMessage = (messageData: Message) => {
    return {
        type: messageTypes.SET_MESSAGE,
        payload: messageData,
    };
};

export const resetMessage = () => {
    return {
        type: messageTypes.RESET_MESSAGE,
    };
};
