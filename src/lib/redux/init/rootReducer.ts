// Core
import { combineReducers } from 'redux';
// Reducers
import { signUpReducer } from '../../../redux/reducers/auth';
import { loadingReducer } from '../../../redux/reducers/loading';
import { messagesReducer } from '../../../redux/reducers/messages';
import { cardReducer } from '../../../redux/reducers/taskCard';
import { tagsReducer } from '../../../redux/reducers/tags';
import { tasksReducer } from '../../../redux/reducers/tasks';
import { profileReducer } from '../../../redux/reducers/profile';

export const rootReducer = combineReducers({
    signUpReducer,
    loadingReducer,
    messagesReducer,
    cardReducer,
    tagsReducer,
    tasksReducer,
    profileReducer,
});
