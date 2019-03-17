import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
// import * as 

const initialState = Immutable({
    reposesById: undefined
})

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.REPOSES_FETCHED:
            return state.merge({
                reposesById: action.reposesById
            });
        default:
            return state;
    }
}

export function getReposes(state) {
    const reposesById = state.reposes.reposesById;
    const reposesIdArray = _.keys(reposesById);
    return [reposesById, reposesIdArray];
}