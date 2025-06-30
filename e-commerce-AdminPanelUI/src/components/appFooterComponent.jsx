import { React, Component} from 'react';


class AppFooterComponent extends Component{

    render() {
        const _template = (
        <div>
            <footer className="App-footer">
            <div className="row col-md-12">
                     This is footer
                </div> 
             
            </footer>
        </div>
        )

        return _template;
    }


    

   // addFeedback = () => {
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

   // }
}



export default AppFooterComponent

 