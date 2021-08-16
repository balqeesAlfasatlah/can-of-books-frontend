import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
<<<<<<< HEAD
import BestBook from './BestBooks';
=======
import BestBooks from './BestBooks';
import { useAuth0, withAuth0 } from "@auth0/auth0-react";
import Profile from './Profile';
import "./"
import LogoutButton from './LogoutButton';

>>>>>>> f660fe05db9a4eaad8329b4226cab3f59d39d125

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
<<<<<<< HEAD
                {this.props.auth0.isAuthenticated ? <BestBook/> : <Login/>}
=======
                {this.props.auth0.isAuthenticated ?  <BestBooks/> : <Login/>}
              </Route>
              <Route exact path="/Profile">
            <Profile/>
>>>>>>> f660fe05db9a4eaad8329b4226cab3f59d39d125
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
