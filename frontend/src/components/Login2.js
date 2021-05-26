// import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import {APIService} from '../APIService';
// import {Navigation} from '../components/Navigation'

import React from 'react'

function Login2() {
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default Login2

// const Login2 = ({ login, isAuthenticated }) => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '' 
//     });

//     const { username, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = e => {
//         e.preventDefault();

//         login(username, password);
//     };

//     if (isAuthenticated) {
//         return <Redirect to='/articles/' />
//     }

//     return (
//         <div className='container mt-5'>
//             <Navigation/>
//             <h1>Sign In</h1>
//             <p>Sign into your Account</p>
//             <form onSubmit={e => onSubmit(e)}>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='text'
//                         placeholder='username'
//                         name='username'
//                         value={username}
//                         onChange={e => onChange(e)}
//                         required
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='password'
//                         placeholder='Password'
//                         name='password'
//                         value={password}
//                         onChange={e => onChange(e)}
//                         minLength='6'
//                         required
//                     />
//                 </div>
//                 <button className='btn btn-primary' type='submit'>Login</button>
//             </form>
//             <button className='btn btn-danger mt-3' >
//                 Continue With Google
//             </button>
//             <br />
//             <button className='btn btn-primary mt-3' >
//                 Continue With Facebook
//             </button>
//             <p className='mt-3'>
//                 Don't have an account? <Link to='/signup'>Sign Up</Link>
//             </p>
//             <p className='mt-3'>
//                 Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
//             </p>
//         </div>
//     );
// };

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, APIService.Loginuser )(Login2);