
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import { types } from 'util';
import {} from './actionTypes';


const initialState = Immutable({
    sections: undefined,
    selectedSection: undefined,
    selectionFinalized: false
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SELECTIONS_FETCHED:
            return state.merge({
                sections: action.sections,
                selectionFinalized: false
            });
        case types.OPEN_GH:
            return state.merge({
                selectedSection: 'GH',
                selectionFinalized: true
            })
        case types.OPEN_SOF:
            return state.merge({
                selectedSection: 'SOF',
                selectionFinalized: true
            })
    }
}

export function getSections(state) {
    const sections = state.section.secions;
    return sections;
}

export function getSelectedSection(state) {
    return state.section.selectedSection;
}

export function isSectionChoosed(state) {
    return state.sections.selectionFinalized;
}