import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    reposesFetchingEnd: false,
    reposes: undefined,
    currentPage: 1,
    prevPage: "/",
    totalPages: 3, // Only the first 1000 search results are available
    logged_in: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.LOGGED_IN:
            return state.merge({
                logged_in: true
            });
        // case types.LOGGING_FAILED
        case types.REPOSES_FETCHING_START:
            return state.merge ({
                reposesFetchingEnd: false
            });
        case types.REPOSES_FETCHING_END:
            return state.merge ({
                reposesFetchingEnd: true
            });
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

export function getDetails(state) {
    return state.github.details
}

export function isLoggedIn(state) {
    return state.github.logged_in
}

export function isFetchingEnd(state) {
    return state.github.reposesFetchingEnd
}
