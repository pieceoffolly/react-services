import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    details: undefined,
    detailsType: undefined
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.DETAILS_FETCHED:
            return state.merge({
                details: action.detailsById,
                detailsType: action.detailsType
            });
        default:
            return state;
    }
}

export function getDetails(state){
    return state.details.details;
}