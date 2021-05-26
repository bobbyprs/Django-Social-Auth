import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Signin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    // handleSubmit =(evt) =>{
    //     evt.preventDefault()
    //     const creadentialDetails ={
    //         username:evt.currentTarget['username'].value,
    //         password:evt.currentTarget['password'].value,
    //         returnSecureToken:true
    //     }
    //     axios({
    //         method:'post',
    //         data:creadentialDetails,
    //         url:'http://127.0.0.1:8000/login/'

    //     }).then(res =>{
    //         console.log(res.data)
    //     })

        
    // }
    
    render() {
        //console.log('reducer state', this.props.state)
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                <div className='container'>
                <label  class="form-label">Username</label>
                <input name="username" type="text"                
                class="form-control"
                ></input>
                <label  class="form-label">password</label>
                <input name="password" type="password"
                class="form-control" 
                 ></input><br/>
                 <button className='btn btn-primanry bg-secondary' value='Login' type='submit'>Login</button>
                 </div>
                </form> */}
                
            </div>
        )
    }
}
// const mapStateToProps = state =>{
//     return{
//         state:state
//     }
// }
// const mapDispatchToProps =dispatch =>{
//     return{
//         authSucess :val =>dispatch({type:'AUTH_SUCESS',payload:val})
//     }
// }
export default Signin
//connect(mapStateToProps,mapDispatchToProps)