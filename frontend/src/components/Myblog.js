import React from 'react'
import {useState,useEffect,useContext} from 'react'
import {useCookies} from 'react-cookie'
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Button} from 'react-bootstrap';
import ContextProvider from './ComponentC'

function Myblog() {
    
    const [articles, setArticles] = useState([])
    const [token ,setToken,removeToken] = useCookies(['mytoken'])
    const {uservalue,setUservalue}=useContext(ContextProvider)

    useEffect(() =>{
        fetch('http://127.0.0.1:8000/lolp1/articles/',{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token['mytoken']}`
            }
        })
       .then(res =>res.json())
       .then(res =>{
           setArticles(res)
        })
       .catch(error =>console.error(error))
       
    },[])

    useEffect(() => {
        if(!token['mytoken']) {
            
            window.location.href = '/'
           
        }
    }, [token])


    const LogoutBtn = () => {
        console.log( 'logout pressed')
        removeToken('mytoken') 
      }




    return (
        
        <div>

            <div style={{marginBottom:'230px'}}className='navdiv '>
           <Navbar className="shadow p-3 bg-dark bg-gradient" expand="lg">
           
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  
                <Button style={{margintop:'5px',marginRight:'20px',marginBottom:'5px'}} className="d-inline p-2 bg-dark text-white" href="/articles">
                   UserArticles
                </Button>
               
                <Button style={{marginRight:'20px',marginBottom:'5px'}} className="d-inline  bg-dark text-white" onClick={LogoutBtn}>
                    LOGOUT
                </Button>
        
                </Nav>
                </Navbar.Collapse>
                
                 <h1>{uservalue}</h1>
            </Navbar>
            </div>
            <div className='container-lg'>
          {articles && articles.map(article =>{

              return(
                  
                <div className="col">
                <div class=" focus mt-2 mb-2 card shadow-lg">
                  <svg class="bd-placeholder-img card-img-top" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    <div class="card-header text-white bg-dark rounded"><h3>Creater:{article.owner}</h3></div>
                    <div class="card-body">
                     <h5 class="card-title"><h4>Title:</h4>{article.title}</h5>
                      <p class="card-text"><h4>Description:</h4>{article.description}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        {/* <div class="btn-group">
                          {props.uservalue==article.owner ?
                          <div>
                            <button  class="btn btn-primary mr-2 rounded-pill" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-whatever="@getbootstrap"  onClick =  {() =>editBtn(article)}>Update</button>
                            <button  onClick={() => deleteBtn(article)} class="btn btn-danger rounded-pill">Delete</button>
                            </div>:<h4>U dont have edit permission</h4>}   
                        </div> */}
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                  <br/>
                </div>
               
              )
          })

          }
        </div>
        </div>
    )
}

export default Myblog
