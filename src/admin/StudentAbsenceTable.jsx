import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import {LearningConsumer } from '../context'

class StudentsAbsenceTable extends Component {
    state = { dataStudents :  [] }
details = (table) => { 
 if (table)  {  return (<tbody>

{table.map(el => { return (<tr>    <td> {el.email}  </td>   
    <td>{el.absence}</td>
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
     
      <th>Absence</th>
      
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
 
export default StudentsAbsenceTable;