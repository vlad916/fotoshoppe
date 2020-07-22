import React, { Component } from 'react';

class LoginForm extends Component {
    state =  {
        account: { username: '', password: '' }
    };

 
    handleSubmit = e => {
        e.preventDefault();

    }

    handleChange = (e) => {
        const 
    };  
    render() { 
        return ( 
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input
                            value={this.state.account.username}
                            onChange={this.handleChange}
                            id="username"
                            type="text"
                            className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='text' className='form-control' />
                    </div>
                    <button className='btn btn-primary'>Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;