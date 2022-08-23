import {User} from '../../screens/Auth/types';
import {NewsObject} from '../../screens/Dashboard/componets/types';

export const NEWS_LIST_LOADING = 'NEWS_LIST_LOADING';
export const NEWS_LIST_SUCCESS = 'NEWS_LIST_SUCCESS';
export const NEWS_LIST_FAIL = 'NEWS_FAIL';

export const IS_LOADING = 'IS_LOADING';

export const NEWS_LOADING = 'NEWS_LOADING';
export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_FAIL = 'NEWS_FAIL';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export const USER_LOADING = 'USER_LOADING';

export interface PatienListLoading {
  type: typeof NEWS_LIST_LOADING;
}

export interface NewsListFail {
  type: typeof NEWS_LIST_FAIL;
}

export interface NewsListSuccess {
  type: typeof NEWS_LIST_SUCCESS;
  payload: NewsObject[];
}

export interface NewsLoading {
  type: typeof NEWS_LOADING;
}

export interface NewsFail {
  type: typeof NEWS_FAIL;
}

export interface UsersLoading {
  type: typeof USER_LOADING;
}

export interface NewsSuccess {
  type: typeof NEWS_SUCCESS;
  payload: NewsObject;
}

export interface UsersFail {
  type: typeof FETCH_USER_FAIL;
}

export interface UsersSuccess {
  type: typeof FETCH_USER_SUCCESS;
  payload: User[];
}

export interface FetchUserInfo {
  type: typeof NEWS_LIST_SUCCESS;
  payload: User[];
}

export type NewsListDispatchTypes =
  | PatienListLoading
  | NewsListFail
  | NewsListSuccess;

export type FetchUserDispatchInfoType = UsersLoading | UsersFail | UsersSuccess;

export type NewsDispatchTypes = NewsLoading | NewsFail | NewsSuccess;
