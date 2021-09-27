import CONSTANTS from "../actions";
import {initialState} from "../data/InitialValues";
const dataReducer = (state=initialState, action) => {
    let tournamentId = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')).length + 1 : initialState.length + 1;
    const listItem = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')).sort((a, b) => b.created - a.created) : initialState.sort((a, b) => b.created - a.created);

    const {payload, type} = action;
    switch (type) {
        case CONSTANTS.ADD_NOMINEE:
            const newList = [...state, {id: tournamentId, name: payload.name, winner: payload.winner, img: payload.img, points: 0, lastVoteDate: '13.03.2021 15:18', created: new Date(Date.now()).getTime()}];
            (async () => await localStorage.setItem('list', JSON.stringify([...listItem,{id: tournamentId, name: payload.name, winner: payload.winner, img: payload.img.length > 0 ? payload.img : 'https://i.stack.imgur.com/y9DpT.jpg', points: 0, lastVoteDate: '13.03.2021 15:18', created: Date.now()}])))();
            tournamentId++;
            return newList;
        case CONSTANTS.DELETE_NOMINEE:
            (async () => await localStorage.setItem('list', JSON.stringify(listItem.filter(tournament => tournament.id !== payload.id))))();
            return state.filter(tournament => tournament.id !== payload.id);
        default:
            return state;
    }
}

export default dataReducer;
