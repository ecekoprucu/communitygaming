import CONSTANTS from "../actions";
import {initialState} from "../data/InitialValues";

const scoreReducer = (state=initialState, action) => {
    const {type, payload} = action;
    const listItem = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')).sort((a, b) => localStorage.getItem('sortType') === 'asc' ? a.points - b.points : localStorage.getItem('sortType') === 'desc' ? b.points - a.points : b.created - a.created) : initialState.sort((a, b) => b.created - a.created);

    switch (type) {
        case CONSTANTS.INCREASE_POINT:
            (async () => await localStorage.setItem('list', JSON.stringify(listItem.map(item => item.id === payload.tournamentId ? {...item, points: item.points+1} : item))))();
            return state.map(tournament => tournament.id === payload.tournamentId ? {...tournament, points: tournament.points+1} : tournament);
        case CONSTANTS.DECREASE_POINT:
            (async () => await localStorage.setItem('list', JSON.stringify(listItem.map(item => item.id === payload.tournamentId ? {...item, points: item.points-1} : item))))();
            return state.map(tournament => tournament.id === payload.tournamentId ? {...tournament, points: tournament.points-1} : tournament);
        default:
            return state;
    }
}
export default scoreReducer;
