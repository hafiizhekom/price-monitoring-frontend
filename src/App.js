import React, { Component } from 'react';
import Page1 from './Main/Page1'
import Page2 from './Main/Page2'
import Page3 from './Main/Page3'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



class App extends Component {
  constructor(props) { 
    super(props);
    global.Server = "https://price-monitoring-scheduler.herokuapp.com/";
  }

  componentDidMount(){

  }

  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className="navbar-brand">Price Monitoring</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/page/1">
                    Submit Link 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/page/2">
                    All Link 
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
              <div id="wrapper">
                
  
                <div id="content-wrapper">
                  <Switch>
                    <Route exact path='/page/1' component={Page1} />
                    <Route exact path='/page/2' component={Page2} />
                    <Route exact path='/page/3' component={Page3} />
                    <Route exact path='*' component={Page1} />
                  </Switch>
                </div>
              </div>
          </div>
            
        </div>
      </Router>
    );
  }

}

export default App;
