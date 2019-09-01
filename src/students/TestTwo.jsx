import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import {LearningConsumer } from '../context'
import {Button} from 'react-mdl'

class TestTwo extends Component {
    state = { code:"" }
    handleChange = (a) => {
    
       
        this.setState({code:a})
      
    }
    render() {
        const options = {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'dracula',}
        
        return ( <div className="container">  
        <div className="row text-capitalize " style={{display:"flex",justifyContent:"center",text:"bold"}}>  <h2 className="mb-5"  > Test Level Two  </h2> </div>
        
        <div className="row">
            <div className="col-6 problem"> <p>
         <br/>   Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

         <br/>  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

         <br/>  If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

         <br/>  Examples
         <br/>  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
         <br/>  "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
         <br/>  ""  -->  ""
                </p>   </div>
           <LearningConsumer>
                {value => (<div className="col-6"> <CodeMirror value = {this.state.StudentCode} onChange ={this.handleChange} options = {options}/>
                <Button type="button"  raised colored accent onClick={() => {   console.log(this.state.code)  
                    value.getCode(this.state) }}>   Send your Code</Button> 
            </div>  
           )}
                </LearningConsumer>
        </div>
         </div> );
    }
}
 
export default TestTwo ;