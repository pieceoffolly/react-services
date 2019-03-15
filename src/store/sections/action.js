import _ from 'lodash';
import axios from 'axios';
import * as types from './actionTypes';
import * as sectionsSelectors from './reducer';
import * as postActions from '';

export function fetchSections() {
    return function(dispatch){
        axios.get('sections.json')
            .then((response) => {
                const sections = response.data;
                const sectionsByName = _.keyBy(sections, (sections) => sections.name);
                dispatch({type: types.SECTIONS_FETCHED, sectionsByName});
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function selectSection(sectionName) {
    return function(dispatch) {
        dispatch({type: types.SECTION_SELECTED, selectedSection: sectionName });

        dispatch(postActions)
    }
}
