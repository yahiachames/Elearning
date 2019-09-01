import React, { Component } from 'react';
import {LearningConsumer } from '../context'
import Bigtable from './StudentsTable'
import Absencetable from './StudentAbsenceTable'
import Paymenttable from './StudentPaymentTable'

class Students extends Component {
    state = { SearchBar :"" }
    
    
    updateSearchBar =  (a) => {
        let table;
        if (a !== "")
       { if(a.toUpperCase() === "ABSENCE") table = <Absencetable/>
        else if (a.toUpperCase() === "PAYMENT") table = <Paymenttable/>
    else table = <Bigtable/>
    }
        else table = <Bigtable/>
        return table
    }

    render() { 
        
        return (     <div> <LearningConsumer>{ value => this.updateSearchBar(value.state.SearchBar)  }</LearningConsumer>    </div> 
        );
    }
}
 
export default Students;