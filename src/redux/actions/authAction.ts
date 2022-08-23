import {Dispatch} from 'react';
import {getDBConnection, getUser} from '../../db/db-service';
import {
  FETCH_USER_SUCCESS,
  USER_LOADING,
  FetchUserDispatchInfoType,
  FETCH_USER_FAIL,
} from '../types';

export const loginUserAction =
  (email: string, password: string) =>
  async (dispatch: Dispatch<FetchUserDispatchInfoType>) => {
    try {
      dispatch({
        type: USER_LOADING,
      });

      const db = await getDBConnection();
      console.log(email, password);
      const user = await getUser(email, password, db);

      if (user.length > 0) {
        dispatch({
          type: FETCH_USER_SUCCESS,
          payload: user,
        });
      } else {
        dispatch({
          type: FETCH_USER_FAIL,
        });
      }
    } catch (e) {
      dispatch({
        type: FETCH_USER_FAIL,
      });
    }
  };
