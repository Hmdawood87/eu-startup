import React, { Component } from 'react'
import * as organizationApi from '../../services/organization_property';
import {Button} from "react-bootstrap";

export default class FileUpload extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {

        };
    }
    
    // On file select (from the pop up) 
    onFileChange = event => { 
         // Update the state 
        this.setState({ [event.target.name]: event.target.files });
    }; 

    // On file upload (click the upload button) 
    onFileUpload = () => { 
        // Create an object of formData 
        let formData = new FormData();
        console.log("in upload file",this.state);

        // Update the formData object 
        // formData.append(
        //   "myFile",
        //   this.state.selectedFile,
        //   this.state.selectedFile.name
        // );
       
        // Details of the uploaded file 

        // Request made to the backend api 
        // Send formData object 
        // organizationApi.uploadFile(formData, (event)=>{
        //   console.log(Math.round((100 * event.loaded) / event.total));
        // })
        // .then(res => console.log(res));
    }; 

    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 

    render() {
        return (
            <div>
                    <h3> 
                     File Upload using React! 
                    </h3> 
                    <div> 
                        <input type="file" onChange={this.onFileChange} name="files[]" multiple/>
                        <Button onClick={this.onFileUpload}> 
                        Upload! 
                        </Button> 
                    </div> 
                {/*{this.fileData()} */}
            </div>
        )
    }
}
