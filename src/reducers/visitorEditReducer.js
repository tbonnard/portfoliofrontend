import visitorServices from '../services/visitor'

import { setNotification } from './notifReducer'

export const visitorEdit = (item) =>{
    return async dispatch => {
        dispatch({
            type: "FLAG_EDIT_VISITOR",
            data: item
        })
    }
}

export const visitorEditNull = () =>{
    return async dispatch => {
        dispatch({
            type: "NULL_VISITOR",
            data: null
        })
    }
}

const visitorEditReducer = (state=null, action) => {
    switch(action.type) {
        case 'FLAG_EDIT_VISITOR':
            return action.data
        case 'NULL_VISITOR':
            return action.data
        default:
            return state
    }

}

export default visitorEditReducer