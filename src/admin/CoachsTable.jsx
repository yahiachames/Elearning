import React, { Component } from 'react';
import { Table , Button,ButtonToolbar } from "react-bootstrap"
import AddCoach from './addCoach'
import {LearningConsumer } from '../context'

class CoachsTable extends Component {
  state = { dataCoachs: [{name:"chames",age:20,salary:"300$",_id:123}] , addCoach :false }
  

  details = (table,b) => {
    if (table) {
      return (<tbody>

        {table.map(el => {
          return (<tr>
            <td> {el.name}</td>
            <td>{el.age}</td>
            <td>{el.salary}</td>
            <td>  <i className="fa fa-user-times deleteIcon"   id={el._id} onClick={(event) =>  {  b(event.target.id)   }  }  ></i>    </td>
        </tr>)
        })}
      </tbody>)
    }
  }

  render() {
    return (
    <LearningConsumer>
   { (value) => (<div className="container tableMargin">


      <Table striped bordered hover >
        <thead>
          <tr>

            <th>Name</th>
            <th>Age</th>
            <th>salary</th>
            <th>options</th>

          </tr>
        </thead>

        {this.details(value.state.dataCoachs,value.handelDelete)}


      </Table>

      <div>
      {  this.state.addCoach ?     <AddCoach></AddCoach>         :  <ButtonToolbar> 
        <Button variant="primary" type='button' onClick={() => this.setState( {addCoach : true})}  size="lg">
            Add Coach
        </Button>  
         </ButtonToolbar>}
</div>
    </div>)}
    </LearningConsumer>
    );
  }
}

export default CoachsTable;