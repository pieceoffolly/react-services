import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    reposes: undefined,
    currentPage: 1,
    prevPage: "/",
    totalPages: 30, // Only the first 1000 search results are available
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.REPOSES_FETCHED:
            return state.merge ({
                reposes: action.reposes,              
                // totalPages: action.totalPages               
            });
        // case types.REPOSES_NOT_RECEIVED:
        //     return state.merge({
        //         selectedElement: undefined                
        //     })
        case types.NEW_PAGE:
            return state.merge ({
                prevPage: action.prevPage,
                currentPage: action.newPage
            });
        default:
            return state;
    }
}

// export function getElements(state) {
//     const elementsById = state.elements.elementsById;
//     const elementsIdArray = _.keys(elementsById);
//     return [elementsById, elementsIdArray, state.elements.elementsType];
// }

// export function getElement(state) {
//     const elementById = _.find(state.elements.elementsById, ['id', state.elements.selectedElement]);
//     return [elementById, state.elements.elementsType];
// }

export function getReposes(state) {
    return state.github.reposes
}

export function getCurrentPage(state) {
    return state.github.currentPage
}

export function getPrevPage(state) {
    return state.github.prevPage
}

export function getTotalPages(state) {
    return state.github.totalPages
}

export function isFetchingPossible(state) {
    return state.github.fetch_stopped
}