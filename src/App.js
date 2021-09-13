import './App.css'
import Grips from './components/Grips'

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
            </Switch>
          </Router>
        </Fragment>
      </header>
    </div>
  );
}

export default App;
