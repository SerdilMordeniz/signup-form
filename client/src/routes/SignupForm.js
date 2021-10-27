import React, { useState } from 'react';
import axios from 'axios';
import Username from '../signup-elements/Username';
import Email from '../signup-elements/Email';
import Password from '../signup-elements/Password';
import { Redirect } from "react-router-dom";

/**  Component for the signup form with username, email and password. */
function SignupForm( {username, setUsername} ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailTaken, setEmailTaken] = useState();
    const [success, setSuccess] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3001/post-user-details', {
            username,
            email,
            password
        });
        console.log(response.data.success);
        setEmailTaken(!response.data.success);
        setSuccess(response.data.success)
    }

    return (
        <div className="Signup-Form">

            <h1>Signup Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="settings">
                    <Username setUsername={setUsername} />
                    <Email setEmail={setEmail} />
                    <Password setPassword={setPassword} />
                    <input className='signup' type="submit" value="Signup" />

                    {/* Conditional rendering for the warning message that the email is already taken. */}
                    {emailTaken &&
                        <small className="success" style={{color: "red"}}>Sorry Email is already taken.</small>
                    }

                    {/* Conditional rendering for redirecting to the welcome page. */}
                    {success &&
                        <Redirect to="/welcome-page" />
                    }
                </div>
            </form>

        </div>
    )
}

export default SignupForm
