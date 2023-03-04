import visitorServices from '../services/visitor'

import { setNotification } from './notifReducer'


export const getVisitor = (object) =>{
    return async dispatch => {
        if (object.internal_id) {
            try {
                const visitor = await visitorServices.getVisitorDetails(object)
                dispatch({
                    type: "GET_VISITOR",
                    data: visitor
                })
            } catch(exception) {
                dispatch(setNotification({message:'error getting visitor details', style:'error'}))
            }
       }

    }
}


// Create a new visitor so no need to update state as the result is not weather results
export const createVisitor = (object) => {
    return async dispatch => {
        const visitor = await visitorServices.createVisitor(object)
        dispatch({
            type: "CREATE_VISITOR",
            data: visitor
        })
    }
}

export const editVisitor = (object) => {
    return async dispatch => {
        const visitor = await visitorServices.editVisitor(object)
        dispatch({
            type: "EDIT_VISITOR",
            data: visitor
        })
    }
}




const visitorReducer = (state=null, action) => {
    switch(action.type) {
        case 'GET_VISITOR':
            return action.data
        case 'CREATE_VISITOR':
            return action.data
        case 'EDIT_VISITOR':
            return action.data
        default:
            return state
    }

}

export default visitorReducer