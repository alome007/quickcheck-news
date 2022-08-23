import {Dispatch} from 'redux';
import {getStories, getStory} from '../../network/news';
import {NewsObject} from '../../screens/Dashboard/componets/types';
import {
  NewsListDispatchTypes,
  NEWS_LIST_FAIL,
  NEWS_LIST_LOADING,
  NEWS_LIST_SUCCESS,
} from '../types';

export const fetchNewsAction =
  () => async (dispatch: Dispatch<NewsListDispatchTypes>) => {
    try {
      dispatch({
        type: NEWS_LIST_LOADING,
      });

      const [_, stories] = await getStories('new');
      const res: NewsObject[] = await Promise.all(stories.map(getStory));

      dispatch({
        type: NEWS_LIST_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: NEWS_LIST_FAIL,
      });
    }
  };
