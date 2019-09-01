import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import {LearningConsumer } from '../context'
import {Button} from 'react-mdl'

class TestThree extends Component {
    state = { code:""  }
    handleChange = (a) => {
    
       
        this.setState({code:a})
      
    }
    render() { 
        const options = {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'dracula',}
       
       return ( <div className="container">  
        <div className="row text-capitalize " style={{display:"flex",justifyContent:"center",text:"bold"}}>  <h2 className="mb-5"  > Test Level Three  </h2> </div>
        <div className="row">
            <div className="col-6 problem"> <p>
        <br/>    Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

        <br/> Examples
        <br/> pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
        <br/> pigIt('Hello world !');     // elloHay orldway !
                </p>   </div>
           <LearningConsumer>
                {value => (<div className="col-6"> <CodeMirror value = {this.state.code} onChange ={this.handleChange} options = {options}/>
                <Button   raised colored accent onClick={() => {value.getCode(this.state) }} >Send your Code</Button> 
            </div>  
           )}
                </LearningConsumer>
        </div>
         </div> );
    }
}
 
export default TestThree ;