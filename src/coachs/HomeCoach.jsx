import React, { Component } from 'react';
 import {Layout,Header,Textfield,Content,HeaderRow,Button} from "react-mdl"
 import {LearningConsumer } from '../context'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit , faUserSlash } from '@fortawesome/free-solid-svg-icons'
import {Form} from "react-bootstrap"

class HomeCoach extends Component {
    state = {  id:"" ,edit:false ,delete:false ,updatedlvl:""}
 
   
    handleTable = (obj,b) => {
    if(obj.SearchBarForCoach === "code" && obj.dataStudents) { return ( <div>        <thead>
        <tr>
          <th>Email</th>
          <th>Code</th>
            <th>Level_wanted</th>
           <th>Level_Deserved</th>
           <th>Options</th>
        </tr>
      </thead>
      <tbody>

{obj.dataStudents.map(el => { return (<tr>    <td> {el.email}  </td>   
  <td>some code</td>
  <td>{el.lvl_wanted}</td>
  <td>{el.lvl_deserved}</td> 
 <td>
 <FontAwesomeIcon  id="1" onClick = {(e) => this.setState({id:e.target.id,edit : true})}   icon={faUserEdit} />
 <FontAwesomeIcon   id="1"  onClick= {(e) => {this.setState({id:e.target.id ,delete : true})
  b(this.state.id)

} }    className="mr-2"    icon={faUserSlash} />
 
 </td>

     </tr>)})}
 </tbody>
      </div> )
     }
      else {return (
<div>
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
  <tbody>

{obj.dataStudents.map(el => { return (<tr>    <td> {el.email}  </td>    <td> {el.name}</td>  
  <td>{el.age}</td> <td>{el.current_study}</td> 
  <td>{el.lvl_wanted}</td> <td>{el.payment_type}</td> 
   <td>{el.payment_date}</td> <td>{el.absence}</td>
    <td>{el.lvl_deserved}</td>    </tr>)})}
 </tbody>
</div>
      )
    }      
    } 
   
    render() { 
        return ( <div className="demo-big-content "   >
        <Layout  >
            <Header transparent className="backgroundCoach"   >
                <HeaderRow title="Coach Panel">
                   <LearningConsumer>
                  {value =>  (<Textfield
                       
                        onChange={(e) => {value.handleSearchBarForCoach(e.target.value)}}
                        label="Search3"
                        expandable
                        expandableIcon="search"
                    />)}
                    </LearningConsumer>
                </HeaderRow>
                
            </Header>
          
            <Content>
                <div className="page-contents mt-5 container"  > 
                <div className="row">
                  <div className="col-auto">
                  <LearningConsumer >
                     {value => (<Table    striped bordered hover variant="dark">
                   {this.handleTable(value.state,value.DeleteStudent)}
                   {this.state.edit === true ?  <Form.Group >
              <Form.Label>Edit level deserved</Form.Label>
              <Form.Control type="Number" placeholder="Enter Deserved level" onChange={(e) => {  this.setState({updatedlvl : e.target.value})}} />
              <Button  type="button"    raised colored accent onClick={() => {
           
            
            value.UpdateDeservedLevel(this.state.updatedlvl)
         
            }} >Submit </Button> 
            </Form.Group> : <div></div> }
                     </Table>)}  
                     </LearningConsumer>
                  </div>
                </div>
                 </div>
            </Content>
        </Layout>
        
    </div> );
    }
}
 
export default HomeCoach;