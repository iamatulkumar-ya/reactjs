import {HashRouter as Router, Routes, Route} from 'react-router-dom';
// importing constant file to read the links
import * as routeConsts from './assets/routeConstants';

// Importing Component
import {HomeComponent} from './components/homeComponent';
import {ProductComponent} from './components/productComponent'; 

export const AppRoute= () => {
    return (
        <Router>
            <Routes> 
              <Route exact path='/' component={HomeComponent} /> 
              <Route path={routeConsts.routeLinks.Product} component={ProductComponent} />  
          </Routes>
        </Router>
    );
}