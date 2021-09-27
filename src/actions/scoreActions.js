import CONSTANTS from "./index";

export const increasePoint = (tournamentId) => {
    return {
        type: CONSTANTS.INCREASE_POINT,
        payload: {
            tournamentId
        }
    }
}

export const decreasePoint = (tournamentId) => {
    return {
        type: CONSTANTS.DECREASE_POINT,
        payload: {
            tournamentId
        }
    }
}
