import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';

// import Header from './Vendor/Header.component';
import Dashboard from './Vendor/Dashboard.component'
import Bidding from './Vendor/Bidding.component'
import AssignDriver from './Vendor/AssignDriver.component'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/Bidding" component={Bidding} />
      <Route exact path="/AssignDriver" component={AssignDriver} />
      </Switch>
      </Router>


  );
}

export default App;
