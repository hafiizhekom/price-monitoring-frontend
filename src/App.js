import React, { Component } from 'react';
import Page1 from './Main/Page1'
import Page2 from './Main/Page2'
import Page2 from './Main/Page3'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



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
            <a className="navbar-brand" href="#">Price Monitoring</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Submit Link <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">All Link</a>
                </li>
              </ul>
            </div>
          </nav>
              <div id="wrapper">
                
  
                <div id="content-wrapper">
                  <Switch>
                    <Route exact path='/' component={Page1} />
                    <Route exact path='/page/2' component={Page2} />
                    <Route exact path='/page/3' component={Page2} />
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
