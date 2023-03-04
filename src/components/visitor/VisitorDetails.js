import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllVisitors } from '../../reducers/visitorsAllReducer'

import copy from '../../files/copy.png'


const VisitorDetails = () => {
    
    const dispatch = useDispatch()
    const visitors = useSelector(state => state.visitors)

    useEffect(() => {
        dispatch(getAllVisitors())
    },[dispatch])


    const handleCopy = (id)  => {
        navigator.clipboard.writeText(`https://tbonnard.onrender.com?visitor=${id}`);
    }

    if (!visitors) {
        return null
    }

    return (
        <div className=''>
            <h2>Visitors</h2>
           {visitors.map(visitor => 
                <div key={visitor.internal_id} className="divVisitorDetail">
                    <img className="logoVisitor" src={visitor.logo} />
                    <p>{visitor.internal_id}</p>
                    <p>{visitor.name}</p>
                    <p>{visitor.description}</p>
                    <p>https://tbonnard.onrender.com?visitor={visitor.internal_id}<img className="logoCopyVisitor" src={copy} onClick={() => handleCopy(visitor.internal_id)}/></p>
                </div>  
           )}
        </div>
    )

}

export default VisitorDetails

