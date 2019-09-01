import React, { Component } from 'react';
import Login from '../node_modules/ant-design-pro/lib/Login';

import axios from 'axios'
import decode from 'jwt-decode'



const { Tab, UserName, Password, Submit } = Login;

class User extends React.Component {
  state = {
    username:"",
    password:"",
    role :""

  };
 onSubmit =  () => {
  axios.post("/user/login",{...this.state},{
    headers: {
      'Authorization': 'Bearer ' + "abc"
    }
  })
  .then(result => { console.log(result) ; let token = result.data
    console.log(JSON.stringify(token)); 
    
  localStorage.setItem("token",JSON.stringify(token))
  localStorage.setItem('athenticated', true);
  console.log(decode(localStorage.getItem('token')).data.role)
 console.log(localStorage.getItem('authenticated'))
 this.props.history.push('/user/panel')
 
    
  
  }).catch(err => {localStorage.setItem("athenticated",false)   }   )

 } 
  
  
  render() {
    return (
     <div className="container-fluid LoginBg " style={{width:"100%",height:"100%"}}>
       <div className="row justify-content-center align-items-center " style={{width:"100%",height:"100%"}}>
         <div className="col-4  align-items-center mt-5 m-5">
      
        <div className="">
        <Login
       
          onSubmit={this.onSubmit}
        >
         
            
            <UserName name="username" placeholder='Email' required type="email" onChange={(e) => this.setState({username:e.target.value})}  />
            <Password name="password" placeholder="Password"  required type="password" onChange={(e) => this.setState({password:e.target.value})}   />
          
          
          <div>
           
         
          </div>
          <Submit className=" mdl-color--pink border-dark" >Login</Submit>
          <div>
            
            <span className="icon icon-alipay" />
            <span className="icon icon-taobao" />
            <span className="icon icon-weibo" />
           
          </div>
        </Login>
      </div>
      
         </div>
       </div>
     </div>
    );
  }
}
export default User;