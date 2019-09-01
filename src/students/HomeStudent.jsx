import React, { Component } from 'react';
import {Layout, Header , HeaderRow,Content, HeaderTabs,Tab} from "react-mdl"
import Home from "./Home"
import SignUp from "./SignUp"
import HomeTest from './HomeTest'

class HomeStudent extends Component {
    state = {  activeTab:0}
  handelTab = () => { if (this.state.activeTab === 0 ) return <Home></Home>
    if (this.state.activeTab === 1 ) return <SignUp></SignUp>
    if (this.state.activeTab === 2 ) return <HomeTest></HomeTest>
                    }
  
    render() { 
        return ( <div style={{height: '100%'}}>
        <Layout fixedHeader fixedTabs>
            <Header  style={{background: 'url(https://i.ibb.co/DGmGpTx/Dawn.png) center / cover'}} >
            <HeaderRow title="FivePoints"  /> 
                <HeaderTabs ripple activeTab={0} onChange={(tabId) => {this.setState({activeTab:tabId})}}  style={{background: 'url(https://i.ibb.co/3cTLHNN/Midnight-City.png) center / cover'}} >
                    <Tab>Home</Tab>
                    <Tab>SignUp</Tab>
                    <Tab>Test Yourself</Tab>
                </HeaderTabs>
            </Header>
            
            <Content  className="pageDM " style={{height:"100%",width:"100%",border:"solid"}} >
                <div className="pageDM  StudentBackgroundOne"  style={{height:"100%",border:"solid",width:"100%"}} > {  this.handelTab()} </div>
            </Content>
        </Layout>
    </div> );
    }
}
 
export default HomeStudent;