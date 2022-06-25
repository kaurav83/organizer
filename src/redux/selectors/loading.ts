import { RootState } from '../../lib/redux/init/store';

export const getLoading = (state: RootState): boolean => {
    return state.loadingReducer.loading;
};