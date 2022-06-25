import { RootState } from '../../lib/redux/init/store';

export const getToken = (state: RootState): string => {
    return state.signUpReducer.token;
};
