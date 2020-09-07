
export const ADD_NOMINATION = 'ADD_NOMINATION';
export const DELETE_NOMINATION = 'DELETE_NOMINATIONS';

const add_nomination = (data) => {
    return {
        type: ADD_NOMINATION,
        payload: data
    }
}

const delete_nomination = (data) => {
    return {
        type: DELETE_NOMINATION,
        payload: data
    }
}

export const add_nomination_action = (data) => (dispatch) => {
    dispatch(add_nomination(data));
}

export const delete_nomination_action = (data) => (dispatch) => {
    dispatch(delete_nomination(data));
}

