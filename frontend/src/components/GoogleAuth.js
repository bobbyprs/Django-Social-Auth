import React from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'
import axios from 'axios';

function GoogleAuth (accesstoken) {
    let history =useHistory()
    axios
        .post('http://127.0.0.1:8000/auth/convert-token/',{
            token : accesstoken,
            backend:'google-oauth2',
            grant_type :'convert_token',
            client_id : 'zMGTdKQsTfvmEQesIa20ux7WdsYCUoSHCveTGdXf',
            client_secret : 'xopCiZqgHgOzcvPXzd5VEH7RAp4mpU5HNQy37aHgdeicwBSq2NdkpNEP3LRTF7ZjF41wEED1EYpCN7D4iqK6rrplywbP9p1CtnzvODAXlMDj5weaEZUSMZnxUkObcEFC',
        }).then((res) =>{
            localStorage.setItem('mytoken', res.data.access_token)
            localStorage.setItem('refreshtoken', res.data.refresh_token)
            
        }).catch((res) => {
            return res.json()
        })
    
       
    }
    // const user = () =>{
    //     useEffect(() =>{
    //         if(token['mytoken']){
    //           history.push('/articles/')
    //           console.log(['mytoken'])
    //         }
            
    //       },[token])
    //       return(
    //           <div>
    //               Hello
    //           </div>
    //       )
    // }

export default GoogleAuth
