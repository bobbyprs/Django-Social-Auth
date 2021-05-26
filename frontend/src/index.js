import React ,{useMemo, useState,useContext,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {CookiesProvider} from 'react-cookie'
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Apps from './Apps';
import Reagistration from './components/Reagistration';
//import GlobalContext from './components/ComponentC'
// import { createStore } from "react-hooks-global-state";
import {createStore} from 'redux'
import Login from './components/Login';
import ContextProvider from './components/ComponentC';
import Myblog from './components/Myblog';


function Router() {
 
  const {uservalue,setUservalue}=useContext(ContextProvider)
  useEffect(() => {
    const user=localStorage.getItem('user')
    if (user){
      setUservalue(user)
    }
  }, [])
  return (

    <CookiesProvider>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/Login' component={Login}/>
    <Route exact path ='/articles/' component={Apps}/>
    <Route path='/Registration' component={Reagistration}/>
    <Route path='/myblog' component={Myblog}/>
    </Switch>
    </BrowserRouter>
    </CookiesProvider>
   
  )
}

export default Router


const reducer = (state, action) => {
  switch (action.type) {
    case "AuthError":
      return { ...state, autherror: action.payload };
    default:
      return state;
  }
};

const initialState = { loggedin: false, autherror: "" };
export const { useGlobalStateProvider, dispatch, useGlobalState } = createStore(
  reducer,
  initialState
);

// const initData ={
//   auth:{tokenID:null,expirationDate:'' },
//   useDetails:[]
// }

// const store =createStore(reducer,initData)


const  Username=() =>{
  const [uservalue,setUservalue] =useState('')
  
  const providerValue =useMemo (() =>({uservalue,setUservalue}),[uservalue,setUservalue])
  
  return(
    <ContextProvider.Provider value={providerValue}>
        <Router/>   
    </ContextProvider.Provider>
  )
}
ReactDOM.render(
  <React.StrictMode>
   <Username/>
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
