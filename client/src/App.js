import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Navbar from "./components/navbar-component"
import PhonesList from "./components/phones-list.component"
import PhoneDetail from "./components/phone-detail.component"
import PhoneUpload from "./components/phone-upload.component"

// import { useAuth0 } from '@auth0/auth0-react';



function App() { 
  return (
    <div className="app">
      <Router>                 
        <div className="content">
          <Navbar />
          <br/>
          <Switch>
            <Route  path="/" exact component={PhonesList} />
            <Route path="/add_phone" component={PhoneUpload} />
            <Route path="/:id" component={PhoneDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
