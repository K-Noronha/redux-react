import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import './App.css';
import ReReHome from './ReduxPgs/ReReHome';
import ReHome from './ReactPgs/ReHome';


function App() {
  return (
    <Router>
      <div className="App">
        <h3>hELLOOO</h3>
 
        <Link to="/">
          <button>
            <h2>Home</h2>
          </button>
        </Link>
        <Link to="/react">
          <button>
            <h2>React</h2>
          </button>
        </Link>
        <Link to="/redux-react">
          <button>
            <h2>React+Redux</h2>
          </button>
        </Link>
        <p>----end of App-----</p>

        <Switch>
          <Route exact path="/redux-react" component={ReReHome} />
          <Route exact path="/react" component={ReHome} />
          <Redirect to="/"/>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
