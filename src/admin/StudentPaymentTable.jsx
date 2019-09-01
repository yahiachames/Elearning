import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import {LearningConsumer } from '../context'

class StudentsPaymentTable extends Component {
    state = { dataStudents :  [] }
details = (table) => { 
 if (table)  {  return (<tbody>

{table.map(el => { return (<tr>    <td> {el.email}  </td>  <td>{el.payment_date}</td>
      </tr>)})}
 </tbody>)}




}
   
    
   
    render() { 
        return ( 
       
      <LearningConsumer >
    {  (value)  =>  ( 
    <div className="container tableMargin">
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Email</th>
      
      <th>Payment_date</th>
     
      
    </tr>
  </thead>

  
  
     { this.details(value.state.dataStudents)}
   
  
</Table>


</div>
)}
</LearningConsumer>


       );
    }
}
 
export default StudentsPaymentTable;