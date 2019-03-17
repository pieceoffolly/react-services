import _ from 'lodash';
import * as types from './actionTypes';
import Github from '../../services/github';

export function fetchReposes() {
    return async(dispatch) => {
      try {
        var array = [1];
        const fetchPromises = _.map(array, (page) => Github.getReposes('All', page));
        const reposes = await Promise.all(fetchPromises);
        const reposesById = _.keyBy(_.flatten(reposes), (repos) => repos.id);

        dispatch({type: types.REPOSES_FETCHED, reposesById})
      } catch(error) {
        console.error(error);
      }
    }
}