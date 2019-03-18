
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
    sectionsByName: undefined,
    selectedSection: undefined,
    sectionChoosed: false
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SECTIONS_FETCHED:
            return state.merge({
                sectionsByName: action.sectionsByName
            });
        case types.SECTION_SELECTED:
            return state.merge({
                selectedSection: action.sectionName,
                sectionChoosed: true
            })
        case types.SELECTION_RESET:
            return state.merge({
                selectedSection:undefined,
                sectionChoosed: false
            })
        default:
            return state;
    }
}

export function getSections(state) {
    const sectionsByName = state.sections.sectionsByName;
    const sectionsNameArray = _.keys(sectionsByName);
    return [sectionsByName, sectionsNameArray];
}

// export function getSection(state) {
//     return _.find(state.sections.sectionsByName, {sectionName})
//     // return state.sections.sectionsByName.name
// }

export function getSelectedSection(state) {
    return state.sections.selectedSection;
}

export function isSectionChoosed(state) {
    return state.sections.sectionChoosed;
}