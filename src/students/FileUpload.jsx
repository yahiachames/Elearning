import React, { Component } from 'react';
import { Upload, Icon,Button } from 'antd';
import axios from 'axios'
import {InputGroup,FormControl} from 'react-bootstrap'
import {LearningConsumer} from '../context'

class FileUpload extends Component {
    state = { selectedFile : null , email:""}
   
   handelclick = (cb) => {
   console.log("clicked")
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    axios.post("students/upload", {...this.state}).then(res => { 
  console.log(res)
}).catch(err => console.log(err))
cb()
   }
    render() { 
        const inf = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
          };
        return ( <div className="container">
            <div className="row"   >
                <div className="col-auto" style={{display:"flex",justifyContent:"center",text:"bold"}} >
                <Upload {...inf} onChange={(file) =>this.setState({selectedFile:file})} >
            <Button   >
              <Icon type="upload" /> Click to Upload
          
            </Button>
            
          </Upload> 
          <InputGroup className="mb-3"> 
          <FormControl
          placeholder="Enter your Email"
         
          type="email"
          required
          onChange={(e) =>  this.setState({email:e.target.value}) }
        />
        <InputGroup.Append></InputGroup.Append>
          </InputGroup>
        <LearningConsumer>   
        {value =>(<Button type="button"   raised colored accent className="mdl-color--accent" style={{color:"white"}} onClick={() => {
             this.handelclick(value.changePage)}
          } >  send your file and email  </Button>)}
               </LearningConsumer>
          
                </div>
            </div>
        </div>  );
    }
}
 
export default FileUpload;