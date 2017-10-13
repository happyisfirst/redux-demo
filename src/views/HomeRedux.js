import { combineReducers } from 'redux';

//引入reducer 及 actionCreator
import list, { loadArticles } from '../components/Home/PreviewListRedux';

export default combineReducers({
    list,
});

export const actions = {
    loadArticles
}