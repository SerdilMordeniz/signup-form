import React, {useEffect} from 'react'

/**  Represents the success page. */
function Welcome( {username} ) {

    useEffect(() => {
        document.title = "Welcome Page";
    }, [])

    return (
        <div>
            <h1>Welcome {username}</h1>
            <p>You signed up.</p>
        </div>
    )
}

export default Welcome
