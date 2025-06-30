import React from 'react';
import {HashRouter as Router, NavLink } from 'react-router-dom';
import * as routeConsts from '../assets/routeConstants';

export default function AppMenuComponent(){

 const _template = (
    <Router> 
        <ul>
            <li><NavLink exact to="/" activeClassName="menu-list-a-active" > What is ReactJs? </NavLink></li> 
            <li><NavLink exact to={routeConsts.routeLinks.Product}  activeClassName="menu-list-a-active" > Folder/File Details</NavLink></li>
             
        </ul>
    </Router>
 )

 return _template;

}