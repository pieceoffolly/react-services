import _ from 'lodash';
import axios from 'axios';
import * as types from './actionTypes';

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
