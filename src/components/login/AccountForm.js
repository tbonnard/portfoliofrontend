import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

import { createAccount } from '../../reducers/userReducer'
import userServices from '../../services/users'

const AccountForm = () => {

    const dispatch = useDispatch()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [usernameConfirmed, setUsernameConfirmed] = useState(true)
    // remettre false si refait check sur username

    const handleCreateAccount = (e) => {
        e.preventDefault()
        const accountObject = {username:username, password:password, confirmPassword:confirmPassword, email:email}
        dispatch(createAccount(accountObject))
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        setFullName('')
        setEmail('')
    }

    const handleUsername = async (e) => {
        setUsername(e.target.value)
        if (e.target.value.length > 0) {
            // const usernameValidated = await userServices.checkUsername(e.target.value)
            // setUsernameConfirmed(usernameValidated)
        }
    }

    return (
        <div className='container'>
            <h2>Create an account</h2>
            <form onSubmit={handleCreateAccount}>
                <input type="text" placeholder='your username' value={username} onChange={handleUsername} />
                {/* <input type="text" placeholder='your name' value={fullName} onChange={(e) => setFullName(e.target.value)} /> */}
                <input type="email" placeholder='your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='your password (6 characters min)' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder='confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <div className=''>
                {!usernameConfirmed && username.length > 0 ?  <p className='error'>username not available</p> : <button type='submit'>Create</button>  }
                </div>
            </form>
            <p>Already have an account?
            <Link className='' to="/signin"> login to your account</Link></p>
        </div>
    )
}

export default AccountForm