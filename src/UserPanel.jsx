import React, { Component } from 'react';
import Admin from './admin/homeAdmin'
import Coach from './coachs/HomeCoach'
import decode from 'jwt-decode'
import NotFound from './NotFound'
class UserPanel extends Component {
    state = {  }
   handelComponent = () => {
   if (localStorage.getItem('token'))  { if(decode(localStorage.getItem('token')).data.role === "admin") {return  <Admin/>  }
    if(decode(localStorage.getItem('token')).data.role === "coach") return <Coach/>}
    else return <NotFound/>
   }
    render() { 
        return ( <div>
{this.handelComponent()}
        </div> );
    }
}
 
export default UserPanel ;