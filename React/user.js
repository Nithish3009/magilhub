import React from 'react'

const user = (details) => {
    const userDetails = details.map((i)=>{
        return (
            <div>
                <h1>{i.name}</h1>
                <h1>{i.email}</h1>
                <h1>{i.number}</h1>
                <h1>{i.password}</h1>
            </div>
        )
    })
}

export default user
