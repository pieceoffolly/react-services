import _ from 'lodash';
import * as types from './actionTypes';
import * as githubSelectors from './reducer';
import * as github_api from '../../services/github_api';

export function fetchReposes(page) {
  return async(dispatch) => {
    try {        
        const array = [1];
        const fetchPromises = _.map(array, (repos) => github_api.getReposes('All', page));
        
        let reposes = await Promise.all(fetchPromises);
        if (!reposes){
        // dispatch({type: types.REPOSES_NOT_RECEIVED});
        // dispatch(sectionsActions.clearSelectedSection());
        } else {        
          reposes = _.orderBy(_.keyBy(_.flatten(reposes), (repos) => repos.id), 'stars', 'desc');
          dispatch({type: types.REPOSES_FETCHING_END})
          dispatch({type: types.REPOSES_FETCHED, reposes})
        }            
    } catch(error) {
      console.error(error);
    }
  }
}

export function setPage(page) {
  return (dispatch, getState) => {
    let prevPage = githubSelectors.getCurrentPage(getState());
    let newPage;
    switch (page) {
      case 'prev':
          newPage = Number(prevPage) - 1;
        break;
      case 'next':
          newPage =  Number(prevPage) + 1;
        break;
      default:
        newPage =  page;
    } 
    dispatch({type: types.NEW_PAGE, prevPage, newPage});  
    dispatch(fetchReposes(newPage));
    // dispatch({type: types.REPOSES_FETCHING_START})  
  }}



  export function setFetchingStart() {
    return (dispatch) => {
      dispatch({type: types.REPOSES_FETCHING_START})
    }    
  }

  export function authorization() {
    return async(dispatch) => {

    }
  }