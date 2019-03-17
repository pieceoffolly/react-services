import _ from 'lodash';
import * as types from './actionTypes';
import * as ghSelectors from '../gh/reducer';

export function fetchDetails() {
    return async(dispatch, getState) => {
      try {
        // const [elementsById, elementsIdArray, elementsType] = ghSelectors.getElements(getState());
        const [detailsById, detailsType] = ghSelectors.getElement(getState());
  
        dispatch({type: types.DETAILS_FETCHED, detailsById, detailsType})
      } catch(error) {
        console.error(error);
      }
    }
  }