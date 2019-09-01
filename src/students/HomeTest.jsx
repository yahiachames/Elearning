import React, { Component } from 'react';
import {LearningConsumer } from '../context'
import TestOne from "./Test"
import TestTwo from "./TestTwo"
import TestThree from "./TestTheree"
import Home from './Home'
class HomeTest extends Component {
    state = {  }
    render() { 
        return ( <div className="container">

<LearningConsumer>
    {value => {if(value.state.page === 0)  return <TestOne></TestOne>
               if(value.state.page === 1)  return <TestTwo></TestTwo>
               if(value.state.page === 2)  return <TestThree></TestThree>
               else return <Home></Home> }}
</LearningConsumer>
        </div>  );
    }
}
 
export default HomeTest;