import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class ArticleNavigation extends Component {
    render() {
        return (
            <div>
                <>
        <div class='navdiv'></div>
           <Navbar bg="dark" className="shadow p-3 " expand="lg">
           
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>
               
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    LOGOUT
                </NavLink>
                </Nav>
                </Navbar.Collapse>
                <h1>Blog App</h1> 
            </Navbar>
           </>
            </div>
        )
    }
}

export default ArticleNavigation
