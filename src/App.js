import React, { Component } from 'react';
import Page1 from './Main/Page1'
import Page2 from './Main/Page2'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



class App extends Component {
  constructor(props) { 
    super(props);
    global.server = "";
  }

  componentDidMount(){

  }

  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
          <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Price Monitoring</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">Submit Link <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">All Link</a>
                </li>
              </ul>
            </div>
          </nav>
              <div id="wrapper">
                
  
                <div id="content-wrapper">
                  <Switch>
                    <Route exact path='/' component={Page1} />
                    <Route exact path='/2' component={Page2} />
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
