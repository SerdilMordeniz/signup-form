import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignupForm from './routes/SignupForm';
import Welcome from './routes/Welcome';

/** Represents the whole Signup application. */
function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Route for the welcome page. */}
          <Route path="/welcome-page">
            <Welcome username={username} />
          </Route>

          {/* Route for the Homepage which is the signup form. */}
          <Route path="/">
            <SignupForm username={username} setUsername={setUsername} />
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default App;
