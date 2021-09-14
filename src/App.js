import './App.css'
import Grips from './components/Grips';
import Health from './components/Health';
import Education from './components/Education';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Fragment } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fragment>
          <Router>
            <Switch>
            <Route path="/pensiones">
              <Grips></Grips>
            </Route>
            <Route path="/salud">
              <Health></Health>
            </Route>
            <Route path="/educacion">
              <Education></Education>
            </Route>
            </Switch>
          </Router>
        </Fragment>
      </header>
    </div>
  );
}

export default App;
