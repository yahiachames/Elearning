import React  from 'react';
import { Route,Switch ,Redirect} from "react-router-dom"
import NotFound from './NotFound'
import HomeStudent from './students/HomeStudent'
import User from './User'
import UserPanel from './UserPanel'






const Routing = () => {
 
    
    return ( <div style={{width:"100%",height:"100%"}}>
<Switch >
<Route  exact  path="/" component={HomeStudent} />
<Route exact path ='/user' component={User}/>

<Route path='/user/panel' component={UserPanel} />


 <Route  component={NotFound}  />
</Switch>
    </div> );
}
 
export default Routing;