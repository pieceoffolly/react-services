import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
// import * as 

const initialState = Immutable({
    reposesByName: undefined
})

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.REPOSES_FETCHED:
            return state.merge({
                reposesByName: action.reposesByName
            });
        default:
            return state;
    }
}

export function getReposes(state) {

}