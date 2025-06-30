import React from 'react';
import reactDocsRouteData from '../assets/constantFiles/routeConstants';
import   BodyScrollToTop   from './utilFunctions';
import { Route, NavLink, Routes} from 'react-router-dom';  
 

export class ReactDocsComponent extends React.Component{
    state= {
        activeRouteLink: "Getting Started" 
    }
    
    

    render(){
       
        return(
            <div  className="reactDocsContainer content-width">
 
                <div className="row">
                    <div className="reactDocsMenuDiv  col-md-3"> 
                        <ReactDocsMenuLink getActiveRoute={this.getActiveRouteText} />
                    </div>
                
                    <div  className="reactDocsRouteDiv col-md-9 ">
                    <div className="currentViewPageHeading"> 
                        <span> {this.state.activeRouteLink} </span>
                    </div>
                    <span> Loading...</span> 
                        <ReactDocsMenuLinkPathComponent />
                    </div>
                </div>  
            </div>  
        );
    }


    getActiveRouteText = (_newText) => {
        this.setState({ activeRouteLink: _newText}); 
    }
}

// Below component will hold the all menu list inside React Docs
function ReactDocsMenuLink(props){
    return( 
        <div id="myTopnav" className="topnav"> 
                <button type="button" className="icon"  onClick={() => myFunction()}>  
                    <i className="bi bi-list"></i>
                </button>   
                {/* className={this.state.activeRouteLink === _item.routeLinkText ? "menu-list-a-active" : "" } */}
                {reactDocsRouteData.map(_item =>  
                    <NavLink  key={_item.routeKey}  exact="true" to={_item.routePath} onClick={() => (props.getActiveRoute(_item.routeLinkText), BodyScrollToTop(), myFunction())}   >
                        {_item.routeLinkText} 
                    </NavLink> 
                )} 
                <br/> 
        </div>
    )


    function myFunction()  {
        // alert("called")
        var x = document.getElementById("myTopnav");
         if(x === null) { console.log("x is null")}
         else {
            if (x.className === "topnav") {
            x.className += " responsive";
            } else {
            x.className = "topnav";
            }
           }
      }
}

// Below component will hold the all menu list path for React Docs
class ReactDocsMenuLinkPathComponent extends React.Component{
    render(){
        return(
            <div > 
            
                <Routes>
                    {reactDocsRouteData.map(item => 
                        <Route  key={item.routeKey} exact="true" path={item.routePath} element={<item.routeComponentName/> }  />
                    )} 
                    
                    
                </Routes>
    
            </div>               
        )
        
    }
}