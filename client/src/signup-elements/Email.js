import React from 'react'

/** Responsible for rendering the email field */
function Email( {setEmail} ) {
    return (
        <>
            <label className='label' htmlFor='email'>Email</label>
            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" id="email" name="email" required />
        </>
    )
}

export default Email
