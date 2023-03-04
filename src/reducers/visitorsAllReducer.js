import visitorServices from '../services/visitor'

import { setNotification } from './notifReducer'

export const getAllVisitors = () =>{
    return async dispatch => {
        const visitors = await visitorServices.getAllVisitors()
        dispatch({
            type: "GET_VISITORS",
            data: visitors
        })
    }
}

const visitorsAllReducer = (state=null, action) => {
    switch(action.type) {
        case 'GET_VISITORS':
            return action.data
        default:
            return state
    }

}

export default visitorsAllReducer