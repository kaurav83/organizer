/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { loadingTypes } from '../types/loading';

export const setLoading = (flag: boolean) => {
    return {
        type: loadingTypes.SET_LOADING,
        payload: flag,
    };
};