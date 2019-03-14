import _ from 'lodash';
import * as types from './actionTypes';

export const fetchSections = () => ({
    type: SECTIONS_FETCHED,
    sections: [
        {id: 'GH', img: 1, URL: ''},
        {id: 'SOF', img: 2, URL: ''}
    ]
});
// export function fetchSections() {
//     return (
//         const sections = ;
//         dispatch({type: types.SECTIONS_FETCHED, sections })
//     );
// }

// export function select