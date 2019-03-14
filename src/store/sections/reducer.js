
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
    sectionsByName: undefined,
    selectedSection: undefined,
    selectionFinalized: false
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SECTIONS_FETCHED:
            return state.merge({
                sectionsByName: action.sectionsByName,
            });
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
    const sectionsNameArray = _.keys(sectionsByName)
    return [sectionsByName, sectionsNameArray];
}

export function getSelectedSection(state) {
    return false //state.sections.selectedSection;
}

export function isSectionChoosed(state) {
    return false //state.sections.selectionFinalized;
}