import _ from 'lodash';
import * as types from './actionTypes';
import githubSelectors from './reducer';
import * as github_api from '../../services/github_api';

export function fetchReposes() {
  return async(dispatch, getState) => {
    try {        
        // let page = githubSelectors.getCurrentPage(getState());
        // page++;
        var array = [1];
        let fetchPromises = _.map(array, (repos) => github_api.getReposes('All', '1'));
        let reposes = await Promise.all(fetchPromises);

        let fetchTotalPages = _.map(array, (data) => github_api.getReposesCount('All'));
        let pagesData = await Promise.all( fetchTotalPages);
        let totalPages = 8;
        // await Promise.all([fetchPromises, fetchTotalPages])
        //              .then( data => {
        //                 reposes = data[1]
        //                 totalPages = data[2]
        //              });
        // let totalPages = await Promise.all(fetchTotalPages);
        if (!reposes){
        // dispatch({type: types.REPOSES_NOT_RECEIVED});
        // dispatch(sectionsActions.clearSelectedSection());
        } else {        
          reposes = _.orderBy(_.keyBy(_.flatten(reposes), (repos) => repos.id), 'stars', 'desc');
          dispatch({type: types.REPOSES_FETCHED, reposes, totalPages})
        }      
    } catch(error) {
      console.error(error);
    }
  }
}