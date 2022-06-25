import { RootState } from '../../lib/redux/init/store';
import { ITagModel } from '../../api/types';

export const allTags = (state: RootState): ITagModel[] => {
    return state.tagsReducer.tags;
};
