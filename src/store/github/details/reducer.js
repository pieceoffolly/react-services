import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    repos: undefined
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.DETAILS_FETCHED:
            return state.merge ({
                repos: action.repos
            });
        default:
            return state;
    }
}

export function getDetails(state) {
    return state.githubDetails.repos
}