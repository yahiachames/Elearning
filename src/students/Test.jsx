import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

import FileUpload from './FileUpload'




class Test extends Component {
    state = { code:"// right ur code here " , email:""}
  
    handleChange = (a) => {
    
       
        this.setState({code:a})
      
    }
  
    render() { 
     
      
        return ( <div className="container">  
         <div className="row text-capitalize " style={{display:"flex",justifyContent:"center",text:"bold"}}>  <h2 className="mb-5"  > Test Level one  </h2> </div>
         <div className="row align-items-center justify-content-center"  >
             <div className="col-6 problem"> <p>
                 
            write an input form  and make some css design
                 </p>   </div>
         
                 <div className="col-auto">  <FileUpload/>   </div>

         </div>
       
          </div> );
    }
}
 
export default Test;