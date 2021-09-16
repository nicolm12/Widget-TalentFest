import './App.css'
import Grips from './components/Grips';
import Health from './components/Health';
import Education from './components/Education';
//import View from './components/view';
import Dashboard from './components/Dashboard';
//import { firebaseApp } from './firebase/firebase-config';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Fragment } from 'react';
import Login from './components/FormLogin';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fragment>
          <Router>
            <Switch>
              <Route path="/pensiones">
                <Grips />
              </Route>
              <Route path="/salud">
                <Health />
              </Route>
              <Route path="/educacion">
                <Education />
              </Route>
              <Route path="/formulario">
                <Login />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </Fragment>
      </header>
    </div>
  );
}

export default App;
