import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./Firebase";

function App() {
  const [{basket}, dispatch] = useStateValue();

  //understand useEffect better soon
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }else{
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
    return () =>{
      //Any Clean up
      unsubscribe();
    }
  }, [])

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          
        </Route>
        <Route path ="/login">
          <Login />
        </Route>
        
      </Switch>
    </div>
    </Router>

  );
}

export default App;
