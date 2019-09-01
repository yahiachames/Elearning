import React, { Component } from 'react';
import {Form,Col,Button} from "react-bootstrap"
import {LearningConsumer } from '../context'
import axios from "axios"
class SignUp extends Component {
    state = { email:"" , name:"chames",age:"",current_study:"",payment_type:"",lvl_wanted:"",payment_date:""  }
    
    
    handleSubmit = (e) => {
        e.preventDefault() 
        console.log(this.state)
    }
    render() { 
        return ( <LearningConsumer> 
        {value => (<div className="container">
            
        <Form onSubmit={(e) => { e.preventDefault()   
            axios.post("/students/signup",{...this.state}).then(result => {console.log(result)
            console.log(this.state)}
            ).catch(err => console.log(err) ) } }>
     <Form.Row>
       <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" placeholder="Enter email" onChange={(e) => {this.setState({email : e.target.value})}}  required />
       </Form.Group>
   
       <Form.Group as={Col} controlId="formGridfullname">
         <Form.Label>FullName</Form.Label>
         <Form.Control  placeholder="Enter Full Name" onChange={(e) => {this.setState({name : e.target.value})}} required />
       </Form.Group>
     </Form.Row>
    
    
     <Form.Row>
     <Form.Group controlId="Age" as={Col}>
       <Form.Label>Age</Form.Label>
       <Form.Control placeholder="Enter Age" onChange={(e) => {this.setState({age : e.target.value})}} required />
     </Form.Group>
   
     <Form.Group controlId="Education Level" as={Col}>
       <Form.Label>Education Level</Form.Label>
       <Form.Control placeholder=" Enter Your Education Level" onChange={(e) => {this.setState({current_study : e.target.value})}} required/>
     </Form.Group>

     <Form.Group as={Col} controlId="formGridState">
         <Form.Label>Level want to Study</Form.Label>
         <Form.Control as="select" onChange={(e) => {this.setState({lvl_wanted : e.target.value})}}>
           <option>Level one</option>
           <option>Level Two</option>
           <option>Level Three</option>
         </Form.Control>
       </Form.Group>
     </Form.Row>
     
     
     
     <Form.Row>
       <Form.Group as={Col} controlId="formGridCity">
         <Form.Label>Payment Date</Form.Label>
         <Form.Control type="date" onChange={(e) => {this.setState({payment_date : e.target.value})}} />
       </Form.Group>
   
       <Form.Group as={Col} controlId="formGridState">
         <Form.Label>Payment type</Form.Label>
         <Form.Control as="select"   onChange={(e) => {this.setState({payment_type : e.target.value})}}  >
           <option   >cheque</option>
           <option   >Cash</option>
           <option  >Debit Card</option>
         </Form.Control>
       </Form.Group>
   
       
     </Form.Row>
   
     
   
     <Button variant="primary" type="submit">
       Submit
     </Button>
   </Form> </div>)}  
   
   </LearningConsumer>  );
    }
}
 
export default SignUp;