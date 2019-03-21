import _ from 'lodash';
import * as types from './actionTypes';
import * as githubSelectors from '../reducer';

export function fetchDetails(reposId) {
    return (dispatch, getState) => {
      const reposes = githubSelectors.getReposes(getState());
      reposId = Number(reposId);
      const repos =  _.find(reposes, ['id', reposId]);  
      dispatch({type: types.DETAILS_FETCHED, repos})
    }
  }