import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import SignUp from './Auth/signUpPage.js';
import Login from './Auth/loginPage.js';
import TodosList from './todos/toDoListPage.js';
import { getUserFromLocalStorage, putUserInLocalStorage } from './localStorageUtils';

export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
  }
  handleUserChange = (user) => {
    this.setState({ user })

    putUserInLocalStorage(user);
  }
    render() {
      return (
          <div>
              <Router>
                <Header/>
                  <Switch>
                      <Route 
                          path="/" 
                          exact
                          render={(routerProps) => <Home {...routerProps} />} 
                      />
                      <Route 
                          path="/todos" 
                          exact
                          render={(routerProps) => 
                            <TodosList user={this.state.user} {...routerProps} />} 
                      />
                      <Route 
                        path="/login" 
                        exact
                        render={(routerProps) => 
                          <Login handleUserChange={this.handleUserChange} {...routerProps} />} 
                      />
                      <Route 
                        path="/signup" 
                        exact
                        render={(routerProps) => 
                          <SignUp handleUserChange={this.handleUserChange} {...routerProps} />} 
                      />
                  </Switch>
              </Router>
          </div>
      )
  }
}
