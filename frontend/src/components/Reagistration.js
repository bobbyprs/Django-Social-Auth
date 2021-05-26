import {APIService} from '../APIService'
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import {Navigation} from './Navigation'
import {useForm} from 'react-hook-form' 
import blogImg from '../BloggingMinimalistic/blogging.svg'
import GoogleAuth from './GoogleAuth'
import Card from "react-bootstrap/Card";
import ContextProvider from './ComponentC'
import {useState,useEffect,useContext} from 'react'

function Reagistration () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [first_name ,setFirstName ] =useState('')
  const [last_name , setLastName ] = useState('')
  const {register,errors,handleSubmit} = useForm()
  const [token, setToken,removeToken] = useCookies(['mytoken'])
  const {uservalue,setUservalue}=useContext(ContextProvider)
  let history = useHistory()

  useEffect(() => {
    if(token['mytoken']) {
        history.push('/Login')
    }
}, [token])


const loginBtn = ()=>{
  setUservalue(username)
  localStorage.setItem('user',username)
  APIService.LoginUser({username,password})
  .then(res =>setToken('mytoken',res.token))
  .catch(removeToken(['mytoken']))
  }
  
  const ReagisterBtn =() =>{
    APIService.RegisterUser({
      username, password ,email,first_name,last_name,
     
    })
    .then(res =>{
      if(res && res.email == "This field must be unique."){
        removeToken('mytoken')
        alert('Email Already Registered')
        return undefined
      }
      else if(res && res.username == 'A user with that username already exists.'){
        removeToken('mytoken')
        alert('A user with that username already exists.')
        return undefined
      }
      else if(res && res.password == 'This password is too short. It must contain at least 8 characters.'){
        removeToken('mytoken')
        alert('This password is too short. It must contain at least 8 characters.')
        return undefined
      }
       loginBtn()
      
    })
    .catch(error =>{
      console.log(error)
    })
  }
 
        return (
        <div>
          <Navigation/><br></br>
          
          <h1 className=' focus mt-2 mb-2 text-center'>RegisterUser</h1>

        <div style={{marginLeft:'auto',marginRight:'auto',maxWidth:'600px',marginTop:'50px'}} className='container-sm'>
              <Card  className="focus mt-2 mb-2 shadow p-3  ">
              <Card.Body style={{backgroundColor:'#E5E5E5'}}>
                <Card.Title className="text-center text-secondary card-title">Register</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <img src={blogImg} className='focus mt-2 mb-2' />
                <form onSubmit={handleSubmit(ReagisterBtn)}>
                        
                        <div className='modal-body' >          
                        <div class="form-group">
           
           <label className='text-dark'>First Name</label>
           <input name="first_name" type="text" class="form-control form-control-danger"
           value = {first_name} onChange = {e => setFirstName(e.target.value)}
           ref={register({required:{value:true,message:'this is a required fied'}})}
          />
          {errors.first_name && (
            <span style ={{color:'red'}}>{errors.first_name.message}</span>
            )}
       </div>
       <div class="form-group">
           <label className='text-dark'> Last Name</label>
           <input name="last_name" type="text" class="form-control"
           value = {last_name} onChange = {e => setLastName(e.target.value)}
           ref={register({required:{value:true,message:'this is a required fied'}})}
           />       
           {errors.last_name && (
              <span style ={{color:'red'}}>{errors.last_name.message}</span>
            )}
             </div>
       <div class="form-group">
           <label className='text-dark'> User Name</label>
           <input name="user_name" type="text" class="form-control"
           value = {username} onChange = {e => setUsername(e.target.value)}
           ref={register({required:{value:true,message:'this is a required fied'}})}
           /> 
           {errors.user_name && (
              <span style ={{color:'red'}}>{errors.user_name.message}</span>
            )}
       </div>
       <div class="form-group">
           <label className='text-dark'>Email</label>
           <input name="email_Field" type="email" class="form-control"
           value = {email} onChange = {e => setEmail(e.target.value)}
           ref={register({required:{value:true,message:'this is a required fied'}})}
           />  
            {errors.email_Field&& (
              <span style ={{color:'red'}}>{errors.email_Field.message}</span>
            )}
       </div>
       <div class="form-group">
           <label className='text-dark'>Password</label>
           <input name="password_field" type="password" class="form-control"
           value = {password} onChange = {e => setPassword(e.target.value)}
           ref={register({required:{value:true,message:'this is a required fied'}})}
           /> 
           {errors.password_field && (
              <span style ={{color:'red'}}>{errors.password_field.message}</span>
            )}
             
       </div>
                           <div class="mx-auto text-center">
                               <button type='submit'  class="btn btn-primary mb-4">Register</button><br/>
                            
                           </div>
                           </div>
                          </form>
                </Card.Text>
              </Card.Body>
            </Card>         
             </div>






















        </div> 
        
        
        )
    }

export default Reagistration
