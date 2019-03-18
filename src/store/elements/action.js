import _ from 'lodash';
import * as types from './actionTypes';
import Services from '../../services/services';
import * as detailsActions from '../details/action';
import * as sectionsSelectors from '../sections/reducer';
import * as sectionsActions from '../sections/action';

export function fetchElements() {
  return async(dispatch, getState) => {
    try {
      var array = [1];
      const selectedSection = sectionsSelectors.getSelectedSection(getState());
      let fetchPromises;
      // try {

      // } catch(error){

      // }
      switch(selectedSection){
        case 'GH':
          fetchPromises = _.map(array, (page) => Services.getReposes('All', page));
          break;
        case 'SOF':
          fetchPromises = _.map(array, (page) => Services.getQuestions('1'));
          break;
        default:
          console.error('Wrong section');
      }
      const elements = await Promise.all(fetchPromises);
      if (!elements){
        dispatch({type: types.ELEMENTS_NOT_RECEIVED});
        dispatch(sectionsActions.clearSelectedSection());
      } else {        
        const elementsById = _.orderBy(_.keyBy(_.flatten(elements), (element) => element.id), 'stars', 'desc');
        const elementsType = selectedSection;
        dispatch({type: types.ELEMENTS_FETCHED, elementsById, elementsType})
      }      
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