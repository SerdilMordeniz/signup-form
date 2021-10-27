import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Username from '../signup-elements/Username';
import Email from '../signup-elements/Email';
import Password from '../signup-elements/Password';
import { Redirect } from "react-router-dom";

/* 
    if I want more validation:

    At least one upper case English letter, (?=.*?[A-Z])
    At least one lower case English letter, (?=.*?[a-z])
    At least one digit, (?=.*?[0-9])
    At least one special character, (?=.*?[#?!@$%^&*-])
    Minimum eight in length .{8,} (with the anchors)
    
*/
/* Minimum eight characters, at least one uppercase letter, one lowercase letter and one number: */
const passwordRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")

/**  Component for the signup form with username, email and password. */
function SignupForm( {username, setUsername} ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailTaken, setEmailTaken] = useState();
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);

    useEffect(() => {
        setPasswordSuccess(passwordRegex.test(password));
        console.log(passwordRegex.test(password));
    }, [password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(passwordSuccess) {
            const response = await axios.post('http://localhost:3001/post-user-details', {
                username,
                email,
                password
            });
            console.log(response.data.success);
            setEmailTaken(!response.data.success);
            setEmailSuccess(response.data.success);
        } else {
            setPasswordSuccess(false);
        }
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
                    {emailSuccess &&
                        <Redirect to="/welcome-page" />
                    }

                    {!passwordSuccess && 
                        <small className="success" style={{color: "red"}}>Your password must be at least eight characters, at least one uppercase letter, one lowercase letter and one number.</small>
                    }
                </div>
            </form>

        </div>
    )
}

export default SignupForm
