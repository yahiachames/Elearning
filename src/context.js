import React, { Component } from "react";
import axios from 'axios'
const LearningContext = React.createContext();
class LearningProvider extends Component {

    state = {
      dataStudents : [],
      dataCoachs : [],
      addCoach : false,
      Show : false,
     SearchBar :"",
      page:0,
     SearchBarForCoach : "",
    code : {code:"" , email:""}
    };
  
  
    componentDidMount(){
      axios.get("/coach/getAllStudent").then(result => this.setState({dataStudents:result.data})).catch(err => {
        console.log(err)
      })
      axios.get("/admin/getCoachs").then(result => this.setState({dataCoachs : result.data})).catch(err => {
        console.log(err)
      })


    }


  handelDelete = (a) => {
 
    let newState =this.state.dataCoachs
     newState = newState.filter(el =>  el._id !== Number(a)  )
   
   this.setState({dataCoachs:newState})
   
  }

showStudents = () => {
this.setState({Show:true})
}
showCoachs = () => {
  this.setState({Show:false})
  }


addCoach = (a) => {
if (a)
  {let newDataCoachs = this.state.dataCoachs
newDataCoachs.push(a)
this.setState({ dataCoachs : newDataCoachs})}
}

handleSearchBar = (a) => {
  let x ;
  x =a
  this.setState({SearchBar : x})
}

addStudent = (a) => {
  let newState = this.state.dataStudents
  newState.push(a)
  this.setState({dataStudents : newState})
  console.log(this.state.dataStudents)
}
 getCode = async (a) => {
 if(a.code && a.email)  {
   this.setState({code : {code : a.code, email:a.email}})
   if (this.state.code.code && this.state.code.email){ await axios.post("/students/sendCode" ,{...this.state.code}).then(result => {console.log(result)
    this.setState({code:{code:""},
      page : this.state.page+1})}
    ).catch(err=>console.log(err))}
}
  else if (a.code && !a.email) {
  
    this.setState({code:{code : a.code}});
    if (this.state.code.code && !this.state.code.email){ await axios.post("/students/sendCode" ,{...this.state.code}).then(result => {console.log(result)
       this.setState({code:{code:""},
        page : this.state.page+1})}
      ).catch(err=>console.log(err))}
  }
  
 

}

handleSearchBarForCoach = (a) => {
  let x ;
  x =a
  this.setState({SearchBarForCoach : x})
}
UpdateDeservedLevel = (a) => {

  this.setState({ dataStudents : [{ ...this.state.dataStudents[0], lvl_deserved : a}]})
}
DeleteStudent = (a) => {
  let newState =this.state.dataStudents
  newState = newState.filter(el =>  el._id !== Number(a)  )

this.setState({dataStudents:newState})
}

changePage = () => {
this.setState({page :this.state.page +1})
}

  render() {
    return (
      <LearningContext.Provider
        value={{ state: this.state  , showStudents:this.showStudents , showCoachs:this.showCoachs , 
          addCoach : this.addCoach ,handelDelete : this.handelDelete ,
           handleSearchBar : this.handleSearchBar,addStudent:this.addStudent , getCode:this.getCode,
           handleSearchBarForCoach : this.handleSearchBarForCoach,UpdateDeservedLevel:this.UpdateDeservedLevel,DeleteStudent:this.DeleteStudent,
           changePage:this.changePage
          }}
      >
        {" "}
        {this.props.children}{" "}
      </LearningContext.Provider>
    );
  }
}
const LearningConsumer = LearningContext.Consumer;
export { LearningProvider, LearningConsumer };
