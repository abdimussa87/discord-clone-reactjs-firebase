import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(err => alert(err.message));
    }
    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt="" />
            <Button onClick={handleSignin}>
                SignIn
            </Button>
        </div>
    )
}

export default Login
