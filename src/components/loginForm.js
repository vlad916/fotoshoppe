import React, { Component } from 'react';

class LoginForm extends Component {

    render() { 
        return ( 
            <div>
                <h1>Login</h1>
                <form>
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input id="username" type="text" className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='text' className='form-control' />
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;