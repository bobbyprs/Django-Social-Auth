import React from 'react'
import {useState,useEffect,useContext} from 'react'
import ArticleList from './components/ArticleList'
import Form from './components/Form';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Button} from 'react-bootstrap';
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom';
import ContextProvider from './components/ComponentC'
import GoogleLogin from 'react-google-login'
import Contacts from './components/Contacts';



export default function Apps(props) {
    const [articles, setArticles] = useState([])
    // const [owner,setowner] =useState([])
    const [editArticle, setEditArticles] = useState(null)
    const [token ,setToken,removeToken] = useCookies(['mytoken'])
    const {uservalue,setUservalue}=useContext(ContextProvider)
    
    let history = useHistory()
    
    

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

    const editBtn =(article) =>{
        setEditArticles(article)
    }
    const updatedInformation = (article) =>{
        const new_article=articles.map(myarticle =>{
            if(myarticle.id === article.id){
                return article;
            }
            else{
                return myarticle;
            }
        })
        setArticles(new_article)
        
    }
    function articleForm() {
        setEditArticles({ title: '', description: '' });
        console.log('function clicked articalform')
    }

    function ContactForm() {
        setEditArticles({ });
        console.log('function clicked Contact')
    }

    const insertedInformation =(article) =>{
        const new_article=[...articles, article]
        setArticles(new_article)
        try {
            alert('sucessfully updated')
        }
        catch(err) {
            document.getElementById("demo").innerHTML = err.message;
          }
        setEditArticles({ title: '', description: '' })
    }
    const deleteBtn =(article) =>{
        const new_articles = articles.filter(myarticle =>{
            if(myarticle.id === article.id){
                return false
            }
            return true;
        })
        setArticles(new_articles)
    }

    const LogoutBtn = () => {
        console.log("hello")
        localStorage.clear()
        removeToken('mytoken') 
       
      }
    //   console.log(uservalue)
   return (
        <div>
            
             <div>
                <>
        <div class='navdiv'></div>
           <Navbar className="shadow p-3 bg-dark bg-gradient" expand="lg">
           
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  
                <Button style={{marginRight:'20px',padding:'30px'}}className="d-inline p-2 bg-dark text-white" href="/myblog">
                   Blogs
                </Button>
                <br/>
              
                <Button style={{marginRight:'20px',padding:'30px'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-whatever="@getbootstrap"onClick ={articleForm} className="d-inline p-2 bg-dark text-white" >
                   Insert Article
                </Button> <br/>
                
                <Button style={{marginRight:'20px',padding:'30px'}} data-bs-toggle="modal" data-bs-target="#ContactModalCenter" data-bs-whatever="@getbootstrap"onClick ={ContactForm} className="d-inline p-2 bg-dark text-white" >
                    Contact Us
                </Button> <br/>
               
                <Button style={{marginRight:'20px',padding:'30px'}}className="d-inline p-2 bg-dark text-white" onClick={LogoutBtn}>
                    LOGOUT
                </Button> <br/>
                </Nav>
                </Navbar.Collapse>
             
                 <h1>{uservalue}</h1>
            </Navbar>
           </>
           <br/>
            </div>
            {/* <h3 style={{color:'black'}}>{uservalue}</h3> */}
            <h1 style={{textAlign:'center'}}>Hi {uservalue} !!</h1>
            <h3 style={{textAlign:'center'}}>Welcome to Blog App</h3>
            <br></br>
            <ArticleList uservalue={uservalue} articles={articles} editBtn={editBtn} deleteBtn={deleteBtn}/>
                <Contacts/>
            {editArticle ? <Form article={editArticle} uservalue={uservalue} updatedInformation={updatedInformation} insertedInformation={insertedInformation}/> :null}
           
               
               
    </div>
    )
}
