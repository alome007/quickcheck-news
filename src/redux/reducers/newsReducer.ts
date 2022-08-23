import {
  NEWS_LIST_LOADING,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LOADING,
  NEWS_SUCCESS,
  NewsListDispatchTypes,
  NewsDispatchTypes,
} from '../types';
import {NewsObject} from '../../screens/Dashboard/componets/types';

interface IinitialState {
  news: NewsObject[];
  details: any;
  loading: boolean;
  error: boolean;
}

const initialState: IinitialState = {
  news: [],
  details: {},
  loading: false,
  error: false,
};
const newsReducer = (
  state: IinitialState = initialState,
  action: NewsListDispatchTypes | NewsDispatchTypes,
): IinitialState => {
  switch (action.type) {
    case NEWS_LIST_FAIL:
      return {...state, loading: false, error: true};
    case NEWS_LIST_LOADING:
      return {...state, loading: true};
    case NEWS_LIST_SUCCESS:
      return {...state, loading: false, news: action.payload, error: false};
    case NEWS_LOADING:
      return {...state, loading: true};
    case NEWS_SUCCESS:
      return {...state, loading: false, details: action.payload};
    default:
      return state;
  }
};

export default newsReducer;
