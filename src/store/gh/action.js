import _ from 'lodash';
import * as types from './actionTypes';
import Github from '../../services/github';
import * as detailsActions from '../details/action';
import * as ghSelectors from './reducer';

export function fetchElements() {
  return async(dispatch) => {
    try {
      var array = [1];
      const fetchPromises = _.map(array, (page) => Github.getReposes('All', page));
      const elements = await Promise.all(fetchPromises);
      const elementsById = _.orderBy(_.keyBy(_.flatten(elements), (element) => element.id), 'stars', 'desc');
      const elementsType = 'gh';
      dispatch({type: types.ELEMENTS_FETCHED, elementsById, elementsType})
    } catch(error) {
      console.error(error);
    }
  }
}

export function selectElement(elementId) {
  return (dispatch) => {
    dispatch({type: types.ELEMENT_SELECTED, elementId });

    dispatch(detailsActions.fetchDetails());
  }
}