import React from 'react'

/** Responsible for rendering the username field */
function Username( {setUsername} ) {
    return (
        <>
            <label className='label' htmlFor='username'>Username</label>
            <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter username" id="username" name="username" required />
        </>
    )
}

export default Username
