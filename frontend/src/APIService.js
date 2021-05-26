
// import {LOGIN_SUCCESS,LOGIN_FAIL} from '../src/components/types'
// import  Apps from './Apps'
// import axios from 'axios';
    
   export class APIService  {
   
        static async UpdateArticle(article_id,body ,token){
        
            const res = await fetch(
                `http://127.0.0.1:8000/lolp1/articles/${article_id}/`, {
                'method': 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(body)
            }
            )
            return await res.json()
            }
            static async  InsertArticle(body,token){
               const res = await fetch(
                    `http://127.0.0.1:8000/lolp1/articles/`, {
                    'method': 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    },
                    body: JSON.stringify(body)
                }
                )
                return await res.json()

            }

            static async  InsertContact(body,token){
                const res = await fetch(
                     `http://127.0.0.1:8000/lolp1/contacts/`, {
                     'method': 'POST',
                     headers: {
                         'Content-Type': 'application/json',
                         'Authorization':`Bearer ${token}`
                     },
                     body: JSON.stringify(body)
                 }
                 )
                 return await res.json()
 
             }



            static async DeleteArticle(article_id,token){
                if(window.confirm('Are you sure ?')){
            
                return fetch(
                    `http://127.0.0.1:8000/lolp1/articles/${article_id}`, {
                    'method': 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    },
                    
                })
                 }
                 return undefined
              
                }
                
             
            //  static async LoginUser(body) {

            //     try {
            //          const resp = await fetch('http://127.0.0.1:8000/login/', {
            //              'method': 'POST',
            //              headers: {
            //                  'Content-Type': 'application/json',
            //              },
            //              body: JSON.stringify(body)
            //          });
            //          return await resp.json();
            //      } catch (error) {
            //          console.log(error.stack);
            //          dispatch({ type: "AuthError", payload: "Invalid User Infos" });
            //          setTimeout(() => {
            //              dispatch({ type: "AuthError", payload: "" });
            //          }, 2000);
            //      }
            //   }
            static LoginUser(body) {

                return fetch('http://127.0.0.1:8000/auth/token/', {
                  'method':'POST',
                  headers: {
                      'Content-Type':'application/json',
                    }, 
                    body:JSON.stringify(body)
          
                }).then(resp => {
                    console.log(resp)
                    return resp.json()
                })
                  .catch(error =>{
                      console.log(error)
                      throw error
                  })
              }
             
            static GoogleUser(body){

                return fetch('http://127.0.0.1:8000/auth/convert-token/',{
                    'method':'POST',
                    headers: {
                        'Content-Type':'application/json',
                      }, 
                      body:JSON.stringify(body)
                }).then(resp => {
                    console.log(resp)
                    return resp.json()

                }).catch(error =>{
                      console.log(error)
                      throw error
                  })
            }     
            static Dates(body){

                return fetch('http://127.0.0.1:8000/dates/',{
                    'method':'POST',
                    headers: {
                        'Content-Type':'application/json',
                      }, 
                      body:JSON.stringify(body)
                }).then(resp => {
                    console.log(resp)
                    return resp.json()

                }).catch(error =>{
                      console.log(error)
                      throw error
                  })
            }         

        static RegisterUser(body) {

                return fetch('http://127.0.0.1:8000/lolp1/users/', {
                  'method':'POST',
                  headers: {
                      'Content-Type':'application/json',
                      
                    }, 
                    body:JSON.stringify(body)
          
                }).then(resp =>{return resp.json()})
                .catch(error =>{
                    console.log(error)
                    throw error
                })
              }
          

    }export default APIService
    
// export const login = (Username, password) => async dispatch => {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         };
    
//         const body = JSON.stringify({ Username, password });
    
//         try {
//             const res = await axios.post('http://127.0.0.1:8000/login/', body, config);
    
//             dispatch({
//                 type: LOGIN_SUCCESS,
//                 payload: res.data
//             });
    
//             dispatch(Apps());
//         } catch (err) {
//             dispatch({
//                 type: LOGIN_FAIL
//             })
//         }
//     };