import React , {useState, useEffect} from 'react'
import ArticleList from './ArticleList'
import APIService from '../APIService'
import {useCookies} from 'react-cookie'
import Login from './Login'
import {Col,Image} from 'react-bootstrap'
// import {Modal,Button, Row, Col,Image} from 'react-bootstrap';

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState(props.article.description)
    const [owner , setowner] = useState(props.uservalue)
    const [token] = useCookies(['mytoken'])
    // const[photofilename] = useState("anonymous.png")
    // const [imagesrc] =useState('process.env.REACT_APP_PHOTOPATH+this.photofilename;') 


    useEffect(() =>{
        setTitle(props.article.title)
        setDescription(props.article.description)
        setowner(props.uservalue)
    },[props.article])


    const updateArticle =() =>{
        APIService.UpdateArticle(props.article.id,{owner,title,description} ,token['mytoken'])
        .then(res =>{
            if(res && res.detail == 'You do not have permission to perform this action.'){
                alert('You do not have permission to perform this action.')
            }
            props.updatedInformation(res)
        })
    }
    const InsertArticle =()=>{
        APIService.InsertArticle({owner,title,description,} ,token['mytoken'])
        .then(res =>props.insertedInformation(res))
        
    }

//    const handleFileSelected = (event) =>{
//         event.preventDefault();
//         this.photofilename=event.target.files[0].name;
//         const formData = new FormData();
//         formData.append(
//             "myFile",
//             event.target.files[0],
//             event.target.files[0].name
//         );

//         fetch(process.env.REACT_APP_API+'lolp1/SaveFile',{
//             method:'POST',
//             body:formData
//         })
//         .then(res=>res.json())
//         .then((result)=>{
//             imagesrc=process.env.REACT_APP_PHOTOPATH+result;
//         },
//         (error)=>{
//             alert('Failed');
//         })
        
//     }




    return (
        <div>
            {props.article ?(
            <div>
                <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        {/* {props.article.id ? </h5>:<h5>Insert Page</h5>} */}


                        {
                            props.article.id ? <h4 class="modal-title text-secondary" id="staticBackdropLabel">Update Page</h4>
                            : <h4 className="modal-title text-secondary" id="staticBackdropLabel">Insert Page </h4>
                        }

                        <button type="button"  className="btn-close btn btn-light" data-bs-dismiss="modal" aria-label="Close"><h4>X</h4></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            {props.article.id ?<div><lable>Published By:</lable><h4 className="modal-title text-secondary" id="staticBackdropLabel">{props.article.owner}</h4></div>:<h1>{props.uservalue}</h1>}
                            
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label text-secondary">Title:</label>
                            <input type="text" value={title} 
                            onChange ={e =>setTitle(e.target.value)}
                            class="form-control" id="recipient-name"/>
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label text-secondary">Description:</label>
                            <textarea class="form-control" value={description} 
                            onChange ={e =>setDescription(e.target.value)} id="message-text"></textarea>
                        </div>
                        {/* { props.article.id ?
                        <Col sm={6}>
                            <Image width="200px" height="200px" src={profile_pic}/>
                            <input onChange={e =>setProfile_pic(e.target.value)} type="File"/>
                            </Col>:
                        <Col sm={6}>
                        <Image width="200px" height="200px" 
                         src={profile_pic}/>
                        <input onChange={e =>setProfile_pic(e.target.value)} type="File"/>
                        </Col>} */}
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        {
                            props.article.id ? <button onClick ={updateArticle} type="button" class="btn btn-primary">Update Article</button>
                            : <button onClick ={InsertArticle} type="button" class="btn btn-primary">Insert Article</button>
                        }
                    </div>
                    </div>
                </div>
                </div>
                </div>
            ):null}
            
        </div>
    )
}

export default Form
