
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
        default:
            return state;
        // case types.OPEN_GH:
        //     return state.merge({
        //         selectedSection: 'GH',
        //         selectionFinalized: true
        //     })
        // case types.OPEN_SOF:
        //     return state.merge({
        //         selectedSection: 'SOF',
        //         selectionFinalized: true
        //     })
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