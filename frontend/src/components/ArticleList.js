import Form from './Form'
import React  from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie'
import { useEffect ,useContext} from 'react'
import Aos from 'aos/dist/aos.css'



function ArticleList(props) {
  
    const [token] = useCookies(['mytoken'])
    const editBtn =(article) =>{
        props.editBtn(article)
    }
    const deleteBtn =(article) =>{
        APIService.DeleteArticle(article.id , token['mytoken'])
        .then(() =>{ 
            props.deleteBtn(article)
        })
        .catch(error =>console.log(error))
    }
    
    console.log(props.articles,'aricles')
     
    // useEffect(() => {
    //   Aos.intit({duration :2000})
    // }, [])
     


 
    return (
        
        <div class="album py-5 bg-light">
        <div class="container">    
        <h4> {props.articles && props.articles.map(article =>{
                return(
                  <div>
                  {article.owner == props.uservalue ?
                      <div className="col">
                        <div class="focus mt-2 mb-2 card shadow-lg">
                          <svg class="bd-placeholder-img card-img-top" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            <div class="card-header text-white bg-dark rounded">Creater:{article.owner}</div>
                            <div class="card-body">
                             <h5 class="card-title">{article.title}</h5>
                              <p class="card-text">{article.description}</p>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                  {props.uservalue==article.owner ?
                                  <div>
                                    <button  class="btn btn-primary mr-2 rounded-pill" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-whatever="@getbootstrap"  onClick =  {() =>editBtn(article)}>Update</button>
                                    <button  onClick={() => deleteBtn(article)} class="btn btn-danger rounded-pill">Delete</button>
                                    </div>:<h4>U dont have edit permission</h4>}   
                                </div>
                                <small class="text-muted">9 mins</small>
                              </div>
                            </div>
                          </div>
                          <br/>
                        </div> :<div></div>}
                        </div>
                )
            })}  </h4> 
        </div>  
        </div>
        
       
    )
}

export default ArticleList
