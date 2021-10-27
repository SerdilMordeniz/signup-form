import React from 'react'

/** Responsible for rendering the password field */
function Password( {setPassword} ) {
    return (
        <>
            <label className='label' htmlFor='password'>Password</label>
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" required />
        </>
    )
}

export default Password
