import React from 'react'
import  { Fragment,useState} from 'react';
import {useForm} from 'react-hook-form' 
import { ToastContainer, toast } from 'react-toastify';

import ReCAPTCHA from "react-google-recaptcha";
import { Zoom } from 'react-toastify';
import {
    Grid,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    InputLabel,
    MenuItem ,
    FormControl,
    Select
} from '@material-ui/core';
import { injectStyle } from "react-toastify/dist/inject-style";
import {Navbar,Nav,Button} from 'react-bootstrap';
import APIService from '../APIService';




function Contacts() {

    const [First_name, setFirst_name] = useState('')
    const [Last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [Message,setMessage] =useState('')
    const [editContact, setEditContact] = useState(null)
    const {register,errors,handleSubmit} = useForm()
  
    const ReagisterBtn = () =>{
        APIService.InsertContact({First_name,Last_name,email,Message
        })
           .then(res =>{
            if(res && res.email == "Enter a valid email address."){
             
              alert('Invalid User Email')
              return undefined
            } 
              alert('submitted sucessfully')
              console.log(res)
              setEditContact({ First_name: '', Last_name: '' , })
            })
            .catch(error =>{
              console.log(error)
            })
        
          }
    


    function onChange(value) {
        console.log(value)
      }

    return (
        <div>
            <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
{/*     
    <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    Launch demo modal
  </Button> */}
  
  <div class="modal fade" id="ContactModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
      <form  onSubmit={handleSubmit(ReagisterBtn)}>
        <div class="modal-header">
        <Typography variant="title" gutterBottom style={{textAlign: 'center',color:'black'}}>
         Contact Us
        </Typography>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <Fragment>
       
        <div className='container' style={{margin:'20px',marginRight:'10px',padding:'40px'}}>
        <Grid container spacing={28}>

                <TextField
                    style={{marginBottom:'10px',marginRight:'20px'}}
                    required
                    id="Shop Name"
                    label="First Name"
                    fullWidth
                    value = {First_name} 
                    onChange = {e => setFirst_name(e.target.value)}
                />

                <TextField
                    style={{marginBottom:'10px',marginRight:'20px'}}
                    required
                    id="lastname"
                    label="Last Name"
                    fullWidth
                    value = {Last_name} 
                    onChange = {e => setLast_name(e.target.value)}
                />

                <TextField
                    style={{marginBottom:'10px',marginRight:'20px'}}
                    required
                    id="email"
                    label="Email"
                    fullWidth
                    value = {email} 
                    onChange = {e => setEmail(e.target.value)}
                />
                
                
                <TextField
                    id="standard-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    required
                    style={{marginBottom:'10px',marginRight:'20px'}}
                    value = {Message} 
                    onChange = {e => setMessage(e.target.value)}
                 />
                 <br/>
                 <ReCAPTCHA
                    
                    sitekey="6LeOJ8QaAAAAAN0D50ikMRg-GxVDKJZBtE5Hfi_U"
                    onChange={onChange}
                />

        </Grid>
        </div>
        
    </Fragment>
        </div>
       
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary " aria-label="Close" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-secondary">Submit</button>
        </div>
        </form>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Contacts
