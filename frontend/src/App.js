import logo from './logo.svg';
import React,{useState,useContext} from 'react'
import './App.css';
// import Hello from './components/Hello'
// import MyClass from './components/MyClass';
import { Navigation } from './components/Navigation';
//import {BrowserRouter, Route, Switch} from 'react-router-dom';
import cylceImg from './cyclecycle.svg'
import ComponentD from './components/ComponentD';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import Languages from '../src/skills/Languages'
import ContactForm from './contact-form/Contactform';
import Analytics from './components/Analytics ';
import Gamess from './components/game';

export const MyContext =React.createContext()

function App() {
  // const {uservalue,setUservalue}=useContext(ContextProvider)
  
  

  return (
    <div className="App">
    <Navigation/>
    {/* {isNavbar ? <h1><NavLink className="d-inline p-2 bg-dark text-white" to="/login">
                    LOGIN
                </NavLink></h1>:<ArticleNavigation/>} */}
      <header className="App-header">
      {/* <div>{uservalue}</div>
      <button className='btn btn-primary' onClick={() =>setUservalue('u did it')}>Click</button> */}
    {/* <MyContext.Provider value="Welcome To Full Stack Blog App">
    <ComponentA/>
    </MyContext.Provider> */}
    <h1 className="header mb-5">Blog App</h1>
    <div style={{margin:'100px',maxWidth:'500px'}}>
        <img src={cylceImg}></img>
        </div>   
        <ComponentD/>
      </header>
    {/* <Switch>
    <Route exact path='/' component={Signup}/>
    </Switch> */}
    <div className='container'>
       


    <div id="experience">
      <h1 className="pt-3 text-center text-secondary font-details-b pb-3">About</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" id='cardtitle' className="d-flex justify-content-center flex-wrap">
                Blog App
                <Card.Img variant="top" className="img-resize"   />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title  className="text-center"></Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <strong style={{marginBottom:'10px'}} className="body-title-style ">Welcome To Full Stack App</strong>
                  <br/>
                  <strong>Duration:</strong> march 1 2021  - march 7 2021
                    <br/>
                    <strong> Description </strong>
                  <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Developed</strong> This is a fully functional app where u can view the blog posts and the 
                      user can Insert, Update, and Delete their own articles or blog posts 
                      </li>
                      <li><strong>Provided</strong> application maintenance that no third preson can update or delete your post 
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the user requirements.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
    <div className='App-header'><Languages/></div>
 </div><br/><hr/>
 <div className='container'>
 <Analytics/>
  </div>
 

  <div className='container'>
   <ContactForm/>
  </div>
    

     <footer className='page-footer  pt-4'>
      <div style={{backgroundColor:'#E5E5E5'}} className='footer-copyright text-center py-3'>
      © 2020 Copyright:Blog App
      </div>
      </footer>
    </div>
    
  );
}

export default App;
