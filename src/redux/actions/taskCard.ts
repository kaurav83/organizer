/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { cardTypes } from '../types/taskCard';

type WindowType = {
    openForm: boolean
    newTask: boolean
}

export const setOpenCard = (flags: WindowType) => {
    return {
        type: cardTypes.SET_OPEN,
        payload: flags,
    };
};