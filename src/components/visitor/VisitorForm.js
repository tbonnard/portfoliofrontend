import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { createVisitor, editVisitor } from '../../reducers/visitorReducer'
import { getAllVisitors } from '../../reducers/visitorsAllReducer'
import { visitorEditNull } from '../../reducers/visitorEditReducer'

import clear from '../../files/clear.png'


const VisitorForm = () => {
    
    const dispatch = useDispatch()

    const [internal_id, setInternal_id] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [logo, setLogo] = useState('')

    const visitorEdit = useSelector(state => state.visitorEdit)

    const handleNewVisitor = (e) => {
        e.preventDefault()
        if (visitorEdit) {
            dispatch(editVisitor({internal_id, name, description, logo}))
        } else {
            dispatch(createVisitor({internal_id, name, description, logo}))
        }
        dispatch(visitorEditNull())
        setInternal_id('')
        setName('')
        setDescription('')
        setLogo('')
        dispatch(getAllVisitors())
    }

    const handleClear = () => {
        dispatch(visitorEditNull())
        setInternal_id('')
        setName('')
        setDescription('')
        setLogo('')
    }

    useEffect(()=> {
        if (visitorEdit) {
            setInternal_id(visitorEdit[0].internal_id)
            setName(visitorEdit[0].name)
            setDescription(visitorEdit[0].description)
            setLogo(visitorEdit[0].logo)
        }
    }, [visitorEdit])

    return (
        <div className='container'>
            <h2>Create a new visitor</h2>
            <form onSubmit={handleNewVisitor}>
                <input type="number" placeholder='internal id' value={internal_id} onChange={(e) => setInternal_id(e.target.value)} />
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="url" placeholder='logo url' value={logo} onChange={(e) => setLogo(e.target.value)}/>
                <div className=''>
                    {visitorEdit && <button type='submit'>Edit</button>}
                    {!visitorEdit && <button type='submit'>Add</button>}
                    <img className="logoCopyVisitor" src={clear} onClick={handleClear}/>
                </div>
            </form>
            <Link className='' to="/signin">Signin</Link>
            <Link className='' to="/">Home</Link>
        </div>
    )

}

export default VisitorForm