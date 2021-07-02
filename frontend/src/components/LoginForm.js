import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
            <div className="login-div">
                <form className='login-form'>
                    <h1 className='login-title'>login</h1>
                    <label for="user-name" className='input-label'>username</label>
                    <input type='text' id='user-name' className='login-text' />
                    <label for="password" className='input-label'>password</label>
                    <input type='text' id='user-password' className='login-text' />
                    <Link className='btn-link-text link-no-underline'>
                        <div className='primary-btn'>login</div>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default LoginForm
