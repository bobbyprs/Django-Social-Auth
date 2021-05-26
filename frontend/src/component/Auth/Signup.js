import React, { Component } from 'react'
import axios from 'axios'

 class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    handleSubmit =(evt) =>{
        evt.preventDefault()
        const creadentialDetails ={
            first_name:evt.currentTarget['first_Name'].value,
            last_name:evt.currentTarget['last_name'].value,
            username:evt.currentTarget['username'].value,
             email:evt.currentTarget['email'].value,
            password:evt.currentTarget['password'].value,
            returnSecureToken:true
        }
        axios({
            method:'post',
            data:creadentialDetails,
            url:'http://127.0.0.1:8000/lolp1/users/'

        }).then(res =>{
            console.log(res.data)
        })

        
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className='container'>
                <label  class="form-label">First Name</label>
                <input name="first_Name" type="text"
                class="form-control" 
                 ></input><br/>
                  <label  class="form-label">Last Name</label>
                <input name="last_name" type="text"
                class="form-control" 
                 ></input><br/>
                 <label  class="form-label">Username</label>
                <input name="username" type="text"                
                class="form-control"
                ></input>
                  <label  class="form-label">Email</label>
                <input name="email" type="email"
                class="form-control" 
                 ></input><br/>
                <label  class="form-label">password</label>
                <input name="password" type="password"
                class="form-control" 
                 ></input><br/>
                 <button className='btn btn-primanry bg-secondary' value='Login' type='submit'>Signup</button>
                 </div>
                </form>
                
            </div>
        )
    }
}

export default Signup
