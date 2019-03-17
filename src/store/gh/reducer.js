import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    elementsById: undefined,
    selectedElement: undefined,
    elementsType: undefined,
    elementChoosed: false

});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ELEMENTS_FETCHED:
            return state.merge({
                elementsById: action.elementsById,
                elementsType: action.elementsType
            });
        case types.ELEMENT_SELECTED:
            return state.merge({
                selectedElement: action.elementId,
                elementChoosed: true
            });
        // case types.REPOS_SELECTION_FINALIZED:
        //     return false;
        default:
            return state;
    }
}

export function getElements(state) {
    const elementsById = state.elements.elementsById;
    const elementsIdArray = _.keys(elementsById);
    return [elementsById, elementsIdArray, state.elements.elementsType];
}

export function getElement(state) {
    const elementById = _.find(state.elements.elementsById, ['id', state.elements.selectedElement]);
    return [elementById, state.elements.elementsType];
}

export function isElementChoosed(state) {
    return state.elements.elementChoosed
}