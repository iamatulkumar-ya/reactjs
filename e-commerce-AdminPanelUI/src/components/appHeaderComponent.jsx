import {Component, React} from 'react';
import logo from '../logo.svg';
// importing app name from constant file
import { AppName }  from '../assets/appConstants';

export class AppHeaderComponent extends Component{
  
    render(){
        return (

        <div> 
            <div className="App-header">
            <img src={logo} width="100" className="App-logo" alt="logo" />  
            </div>

            <div className="App-heading">
             {AppName}  
            </div>

        </div>
        );
    }
}