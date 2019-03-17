import _ from 'lodash';
import axios from 'axios';
import * as types from './actionTypes';
import * as sectionsSelectors from './reducer';
import * as ghActions from '../gh/action';

export function fetchSections() {
    return (dispatch) => {
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
    return (dispatch) => {
        dispatch({type: types.SECTION_SELECTED, sectionName });

        dispatch(ghActions.fetchElements());
    }
}
