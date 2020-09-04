import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import First from './components/First';
import Login from './components/Login';
import Register from './components/Register';
import Feedback from './components/Feedback';
import Sendstory from './components/Sendstory';
import SearchPage from './components/SearchPage';
import Privacy from './components/Privacy';
import SuccessStories from './components/SuccessStories';
function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={First} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/sendstory" component={Sendstory} />
        <Route exact path="/privacy-policy" component={Privacy} />
        <Route exact path="/send-story" component={Sendstory} />
        <Route exact path="/success" component={SuccessStories} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;