import React, { Component } from 'react';
import {Layout , Header , HeaderRow , Navigation , Drawer, Content,Textfield} from "react-mdl"
import Students from './Students'
import CoachsTable from "./CoachsTable"
import {LearningConsumer } from '../context'
class HomeAdmin extends Component {
    state = {   }
    
    
    
    render() { 
      
      
      
      return ( <div >
<LearningConsumer>

           {   (value) =>   (  <div className="demo-big-content">
    <Layout>
        <Header waterfall>
        <HeaderRow title="Admin Panel">
           {  value.state.Show ?   
                <Textfield
                    
                    onChange={(e) => {value.handleSearchBar(e.target.value)}}
                    label="Search2"
                    expandable
                    expandableIcon="search"
                />
             : <div> </div>  }
            </HeaderRow> 
        </Header>
        <Drawer title="Admin Panel">
            <Navigation>
                <a href="#"  onClick = {() => {value.showCoachs()}}  >coachs</a>
                <a href="#"   onClick ={() => {value.showStudents()}}  >students</a>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" >
           
                 { value.state.Show ?   <Students></Students>  :   <CoachsTable></CoachsTable> }
            </div>
        </Content>
    </Layout>
</div>)}
</LearningConsumer>

        </div> );
    }
}
 
export default HomeAdmin;



