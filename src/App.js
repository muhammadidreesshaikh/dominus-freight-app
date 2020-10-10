import React from 'react';
import './App.css';

import Header from './layout/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import LoadConfirmation from './components/LoadConfirmation';
import RealTime from './components/RealTime';
import YourLoads from './components/YourLoads'; 
import LoadDetails from './components/LoadDetails';
import Shipper from './components/Shipper';

import { 
  BrowserRouter as Router, 
  Route,
  Switch   
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          
          {/* all components */} 
          <div>
            <Switch>
            <Route exact path='/' component={Login}></Route>
              <Route exact path='/login' component={Login}></Route>signup
              <Route exact path='/signup' component={Signup}></Route>
              <Route exact path='/loadconfirmation' component={LoadConfirmation}></Route>
              <Route exact path='/realtime' component={RealTime}></Route>
              <Route exact path='/yourloads' component={YourLoads}></Route> 
              <Route exact path='/loaddetails' component={LoadDetails}></Route> 
              <Route exact path='/shipper' component={Shipper}></Route>
            </Switch>
          </div>

      </div>
    </Router>
  );
}

export default App;
