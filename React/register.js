import React, { useState } from 'react'
import User from './user'

const register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        number: 0,
        password: ""
    })
    const [totalUsers, setTotalUsers] = useState([]);
    submitHandle = (prev) => {
        setTotalUsers(...prev, totalUsers = user);
    }
    return (
        <div>
            <form>
                <label>Username</label>
                <input value="name" onChange={(e) => { setUser(name = e.target.value) }} type='text' />
                <label>Email</label>
                <input value="email" onChange={(e) => { setUser(email = e.target.value) }} type='email' />
                <label>Number</label>
                <input value="number" onChange={(e) => { setUser(number = e.target.value) }} type='text' />
                <label>Password</label>
                <input value="password" onChange={(e) => { setUser(password = e.target.value) }} type='text' />
                <button type='submit' onClick={submithandler}>Submit</button>
            </form>
        </div>
    )
}

export default register
