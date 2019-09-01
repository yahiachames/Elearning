import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap'
import {LearningConsumer } from '../context'
class AddCoach extends Component {
    state = { name:"" , age:"", salary:"" }
    render() { 
        return ( 
        <LearningConsumer >
        {   (value)   =>  ( <Form className="formAddCoach" onSubmit={(event) => {     event.preventDefault()  ;value.addCoach(this.state)  ; this.setState({ name:"" , age:"", salary:"" })}}  >
            <Form.Group >
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e) => { let x =""  ; x = e.target.value ;   this.setState({name :x})}}   />
             
            </Form.Group>
          
            <Form.Group >
              <Form.Label>Age</Form.Label>
              <Form.Control type="Number" placeholder="Enter Age" onChange={(e) => { let x =""  ; x = e.target.value ;   this.setState({age :x})}} />
            </Form.Group>
            <Form.Group >
            <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter Salary"  onChange={(e) => { let x =""  ; x = e.target.value ;   this.setState({salary :x})}}  />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>)}
          </LearningConsumer>
           );
    }
}
 
export default AddCoach;