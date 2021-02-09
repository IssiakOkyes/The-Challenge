import React from 'react';
import Header from './iReporter/Header';
import Login from './iReporter/Login';
import Signup from './iReporter/Signup';
import Main from './iReporter/Main';
import Redflag from './iReporter/Redflag';
import Intervation from './iReporter/Intervation';


import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <div className="App">
          
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/Header" component={Header}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Signup" component={Signup}/> 
            <Route path="/Main" component={Main}/>
            <Route path="/Redflag" component={Redflag}/>
            <Route path="/Intervation" component={Intervation}/>
            
          </Switch> 

        </div>

      </Router>

    </div>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to homepage</h1>
    
    
  </div>
)


export default App;
