import './App.css';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  
  return (
    <Router>
      
      <Switch>
      <Route path="/home">
          <Home/>
        </Route>
        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>

    </Router>
  );
}

export default App;
