import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export function Navigation(props){

        return(
        <>
        <div style={{backgroundColor:'#E0FFFF',height:'10px'}}></div>
           <Navbar style={{backgroundColor:'#D8BFD8'}} className="shadow p-1 fixed" expand="sm">
          
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <br/>   
                <Link style={{marginLeft:'10px',marginRight:'10px',backgroundColor:'transparent'}} className="d-inline p-2  text-dark" to="/">
                    HOME
                </Link><br/>
                <Link style={{marginRight:'10px',backgroundColor:'transparent'}} className="d-inline p-2 text-dark" to="/Login">
                    LOGIN
                </Link>
                <Link style={{marginRight:'10px',backgroundColor:'transparent'}} className="d-inline p-2  text-dark" to="/Registration">
                    REGISTRATION
                </Link>

                </Nav><br/>
                
                </Navbar.Collapse>
                <h1 style={{color:'white'}}>LOLP!</h1><br/>
            </Navbar>
           </>
        )
    
}