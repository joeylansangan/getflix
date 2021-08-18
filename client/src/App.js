import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import  { login, logout, selectSubscription, selectUser } from './features/userSlice';
import { auth } from "./firebase";

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Subscribe from './components/Subscribe/Subscribe';
import ProfileScreen from "./screens/ProfileScreen";

import './App.css';

function App() {

  const user = useSelector(selectUser);
  const subscription = useSelector(selectSubscription)

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
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [dispatch])
  // console.log(`appsub: ${subscription}`)
  return (
    <div className="App">
      <Router>
        {!user ? ( 
        <LoginScreen /> 
        ) : (
        <Switch>
          <Route exact path="/" component={subscription? HomeScreen : Subscribe}></Route>
          <Route exact path="/profile" component={ProfileScreen}></Route>
        </Switch>
        )}
    </Router>
    </div>
  );
}

export default App;
