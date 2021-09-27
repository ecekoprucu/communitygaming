import CONSTANTS from "./index";

export const addNominee = (name, winner, img) => {
    return {
        type: CONSTANTS.ADD_NOMINEE,
        payload: {
            name,
            winner,
            img
        }
    }
}

export const deleteNominee = (id) => {
    return {
        type: CONSTANTS.DELETE_NOMINEE,
        payload: {
            id
        }
    }
}
