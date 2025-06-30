import React, { Component } from 'react';
import {AppRoute} from './Route';

import AppMenuComponent from './components/appMenuComponent';
import AppFooterComponent from './components/appFooterComponent';
import {AppHeaderComponent} from './components/appHeaderComponent';



class App extends Component{

  render() 
  {
    return (
        <div className="App">

          {/* displaying app header */}
          <AppHeaderComponent />

          {/* with the help of bootstrap css dividing the content into columns */}
          <div className="row col-md-12">
            <div className="menu-list col-md-2">
                {/* displaying app menu */}
                <AppMenuComponent />
            </div>

            <div className="col-md-10">
              <div className="router-container"> 
                {/* here the content of other page will get displayed */}
                <AppRoute />
              </div>
            </div>
          </div>

          {/* displaying app footer */}
          <AppFooterComponent /> 

        </div>
      ); 
  }
}
 export default App;
