import './App.css'

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
              <Route>

              </Route>
            </Switch>
          </Router>
        </Fragment>
      </header>
    </div>
  );
}

export default App;
