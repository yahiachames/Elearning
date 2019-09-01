import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import {LearningConsumer } from '../context'
import Chart from '../reactVis/Chart'

class StudentsTable extends Component {
    state = { dataStudents :  [] }
details = (table) => { 
 if (table)  {  return (<tbody>

{table.map(el => { return (<tr>    <td> {el.email}  </td>    <td> {el.name}</td>  
  <td>{el.age}</td> <td>{el.current_study}</td> 
  <td>{el.lvl_wanted}</td> <td>{el.payment_type}</td> 
   <td>{el.payment_date}</td> <td>{el.absence}</td>
    <td>{el.lvl_deserved}</td>    </tr>)})}
 </tbody>)}




}
   
    
   
    render() { 
        return ( 
       
      <LearningConsumer >
    {  (value)  =>  ( 
    <div className="container tableMargin">
   <div className="row">
     <div className="col-auto">
     <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Email</th>
      <th>Name</th>
      <th>Age</th>
      <th>Education_LeveL</th>
      <th>Level_wanted</th>
      <th>Payment_Type</th>
      <th>Payment_date</th>
      <th>Absence</th>
      <th>Level_Deserved</th>
    </tr>
  </thead>

  
  
     { this.details(value.state.dataStudents)}
   
  
</Table>

     </div>
   </div>
   <div className="row">
   <div className="col-auto mx-auto">
     
     <Chart/>

   </div>
   </div>

</div>
)}
</LearningConsumer>


       );
    }
}
 
export default StudentsTable;