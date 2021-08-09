import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import  { login, logout, selectUser } from './features/userSlice';
import { auth } from "./firebase";

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

import './App.css';
import ProfileScreen from "./screens/ProfileScreen";
function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
        }))
      }
      else{
        dispatch(logout)
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="App">
      <Router>
        {!user ? ( 
        <LoginScreen /> 
        ) : (
        <Switch>
          <Route exact path="/"><HomeScreen/></Route>
          <Route exact path="/profile"><ProfileScreen /></Route>
        </Switch>
        )}
    </Router>
    </div>
  );
}

export default App;
