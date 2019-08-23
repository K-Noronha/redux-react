import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './style.scss';
import ReHome from './ReactPgs/ReHome';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Store from './ReduxPgs/Store';


function App() {
  return (
    <Router>
      <div className="App">

        <NavBar />

        <Switch>
          <Route exact path="/redux-react" component={Store} />
          <Route exact path="/react" component={ReHome} />
          <Route path="/" component={HomePage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
