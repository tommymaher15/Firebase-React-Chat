import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import GlobalStyles from "./styles/GlobalStyles";
import { auth } from './services/firebase';




// private routes (need authentication to view these! )
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (

    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
// public routes 
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/chat' />}
    />
  )
}




export default class App extends Component {


   constructor(){
    super();
    this.state = {
      authenticated: false,
      loading: true,
    }

   }
  // conditional within the lifecycle hook to change auth and loading states 
   componentDidMount(){
  auth().onAuthStateChanged((user) => {
   if(user){
     this.setState({
       authenticated:true,
       loading:false,
     });
           }
     else{
    this.setState({
      authenticated:false,
      loading: false,
                  })

         }
   })}


  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
      <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat}></PrivateRoute>
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
        </Switch>
      </Router>
    );
  }
}
