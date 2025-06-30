import { React, Component} from 'react';
import buildInfo from '../assets/constantFiles/buildInfo.json'; 
import   learningPortalLogo from '../assets/images/logo/learningPortalLogo.png';

//import AddFeedback from '../nodeJs/addFeedback';

class AppFooterComponent extends Component{

    render() {
        const _template = (
        <div>

            <div className="col-md-12 footer-getCode">   
                <div className="content-width"  > 
                    <a className="sourceCode-button" href="https://github.com/iamatulkumar-ya/reactjs/reactjs-learning-portal" target="_blank" rel="noreferrer">
                            Get the source code &#60;/&#62;  
                    </a> 
                      </div>
            </div> 


            <footer className="App-footer"> 
            <div className="content-width"> 
                <div className="row col-md-12 content-width"> 
                    
                    <div  className="row col-md-12">
                        
                        <div className="col-md-3"></div>
                        <div className="col-md-3 otherPortal"> 
                        <br />
                        <span className="footer-subheading">  Connect with Us  </span> 

                        <ul>
                            <li>
                                <a  href="#" target="_blank" rel="noreferrer">
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a  href="#" target="_blank" rel="noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a  href="#" target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                        
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-3 contactUs"> 
                        <div className="col-md-1"></div>
                        <br />
                        <span  className="footer-subheading">   Contact Us </span> 

                        <ul>
                            <li>
                                +91-90xxxxxxx
                            </li>
                            <li>
                                portalsxxxxx@gmail.com
                            </li>
                        </ul>
                        </div>
                    </div> 
                    </div> 
                </div>   
            <div className="col-md-12">
                        <img src={learningPortalLogo} width="10%" />
                        <p> &copy; 2024 -  Learning Portal</p>
                    </div>
             <div className="col-md-12 App-footerBottom">   
                <div className="content-width"  >  
                    <small className="footer-buildVersion"> App Version:  {buildInfo.buildMajor +'.' + buildInfo.buildMinor +'.' + buildInfo.buildRevision +'  | '+ buildInfo.buildTag }</small>
                </div>
            </div>  
            
            </footer>
        </div>
        )

        return _template;
    }


    

   getFeedback = () => {

    //AddFeedback("Hardcoded", "This is also Hardcoded");
    
   // AddFeedback("Method", "By Method");
 
    //const editJsonFile = require("edit-json-file");
    // If the file doesn't exist, the content will be an empty object by default.
    //let file = editJsonFile('../assets/feedbackData.json');

    //var fs = require('browserify-fs');
   // fs.readFile('../assets/feedbackData.json');

    //You can even append objects
    //file.append("feedbackData", { userName: "From Form", userFeedback: "Good" });
    //console.log(fs);

    //if you want to remove the last element from an array use pop
    //file.pop("classes")
    // Save the data to the disk
    //file.save();
    // Output the whole thing
    //console.log(file.toObject());

 }
}



export default AppFooterComponent

 