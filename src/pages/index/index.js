import './index.css'
import React, { Component } from "react";
import { Layout, Menu, Button, Drawer, Divider, Row, Col } from "antd";
import {
  SettingOutlined,
  HeartFilled,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { RenderRoutes } from "../../router/allocation";
import listJson from "../../json/list.js"

import { Link } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', 'sub1',null),
  getItem('Blockchain', 'sub2',null, [
    getItem('Transactions', '1'),
    // getItem('Pending Transactions', '2'),
    {
      type: 'divider',
    },
    getItem('View Blocks', '3'),
    {
      type: 'divider',
    },
    // getItem('Top Accounts', '4'),
  ]),
];
// console.log(items,'jhkl')

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
class Index extends Component {
  state = {
    collapsed: false,
    theme: "dark",
    isWeChat: false,
    isQq: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  changeTheme = (value) => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };
  scrollIdTop = (idName) => {
    if(document.getElementById("page-top").scrollTop != document.getElementById(idName).offsetTop){
      // setTimeout(() =>{
      document.getElementById("page-top").scrollTop = document.documentElement.scrollTop = document.getElementById(idName).offsetTop-40;
      // this.scrollIdTop(idName)
    // },10)
    }
  }
  onClose = () => {
    this.setState({ collapsed: false });
  }
  menuChange = (e) => {
    // console.log(e,'e')
    if(e.key == 'sub1'){
      this.props.history.push('/')
    }else if(e.key == '1'){
      this.props.history.push('/transactions')
    }else if(e.key == '2'){
      this.props.history.push('/pending')
    }else if(e.key == '3'){
      this.props.history.push('/blocks')
    }else if(e.key == '4'){
      this.props.history.push('/accounts')
    }
  }
  componentDidUpdate(prevProps) {
    // console.log(this.props,'this.props')
    if(this.props.location.path != '/'){
      if(JSON.stringify(this.props.location.prop) !== JSON.stringify(prevProps.location.prop)){
        document.getElementById("page-top").scrollTop = 0
      }else{
        document.getElementById("page-top").scrollTop = 0
      }
    }
  }
  render() {
    const { collapsed } = this.state;
    let { routes } = this.props;
    let { clientWidth } = document.body.clientWidth
    let info = navigator.userAgent;
    let isPhone = /mobile/i.test(info);
    return (
      <Layout>
        <Layout className="site-layout">
          <div className="headerAndContent" id="page-top" style={{height: "100vh",overflow:'scroll'}}>
            <Header className="ant-layout-header" style={{ zIndex: 999, position: "fixed",width: "inherit", background:'white',height: isPhone ? 70 : 100}}>
              <div>
                {
                  isPhone ?
                  <div className="headerNavBox">
                    <img className="logo2" src={require("../../assets/logo2.png")} onClick={() => this.setState({collapsed: !collapsed})}/>
                    <div
                        type="primary"
                        onClick={() => this.setState({collapsed: !collapsed})}
                      >
                        <UnorderedListOutlined className="navLogo" style={{color: '#001529',fontSize: "25px"}}/>
                        {/* <img className="navLogo" src={require("../../assets/menu.png")}/> */}
                    </div>
                  </div>
                  :''
                }
              {
                isPhone ?
                <div style={{display:'flex',justifyContent: 'space-between',width:'90%',margin:'0 auto'}}>
                  <Drawer
                    width={'77%'}
                    height={'auto'}
                    placement='left'
                    closable={false}
                    onClose={this.onClose}
                    open={collapsed}
                    key='left'
                    style={{color:'white'}}
                  >
                    <Menu
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                        mode="inline"
                        items={items}
                        theme="light"
                        onClick={this.menuChange}
                      />
                  </Drawer>
                </div>
                :
                <div className="homeWidth" style={{display:'flex',justifyContent: 'space-between',margin:'0 auto'}}>
                  <div className="logoImgBox">
                    <img className="logo2" src={require("../../assets/logo2.png")}/>
                  </div>
                  <div style={{display:'flex',justifyContent: 'end'}}>
                    <Menu
                      mode="horizontal"
                      style={{
                        width: '180px',
                        // height: 'auto',
                      }}
                      items={items}
                      onClick={this.menuChange}
                    />
                    <div className="testnet">Testnet</div>
                  </div>
                </div>
              }
              </div>
            </Header>
            <Content style={{ minHeight: "95vh",padding: '80px 0 0',textAlign: 'left', overflow: 'scroll'}}>
              <RenderRoutes routes={routes}></RenderRoutes>
            </Content>
            <Footer className="footerBigBox" style={{ background:'none'}}>
              <div className="footerBox">
                <Row className="footerRow">
                  <Col className="footerLt" xs={{ span: 24}} lg={{ span: 12 }} style={{ display: 'flex'}}>
                    <img className="footerLeftLogo" src={require("../../assets/logo1.png")}/>
                    <div>
                      Powered By SIGTAC
                    </div>
                  </Col>
                  <Col className="footerGt" xs={{ span: 24 }} lg={{ span: 6,offset:6  }} style={{display:'flex',justifyContent:'end'}}>
                    {/* <div className="footerBtnBox">
                      <img className="footerLeftLogo" src='https://testnet.snowtrace.io/images/svg/brands/metamask.svg'/>
                      <div>
                        Add (Testnet) Network
                      </div>
                    </div>
                    <div className="footerBtnBox">
                      <SettingOutlined style={{fontSize:'15px',marginTop:'5px'}}/>
                      <div>
                        Preferences
                      </div>
                    </div> */}
                  </Col>
                </Row>
                <Divider className="footerRow" style={{borderColor: '#FFFFFF99',margin: '20px auto'}}/>
                <Row className="footerRow">
                  <Col className="footerBot" xs={{ span: 24}} lg={{ span: 12 }} style={{ display: 'flex'}}>
                    <div>
                      {/* SnowTrace © 2023  (SAMATestnet-A) |  ⛏ Built by the same team behind
                      <span className="footerBotRed">Etherscan</span>
                      | Donate
                      <HeartFilled style={{color: '#e84142', margin:"5px 5px 0"}}/> */}
                      Copyright © 2023 SIGTAC.NET All rights reserved.
                    </div>
                  </Col>
                  <Col className="footerBot" xs={{ span: 24 }} lg={{ span: 6,offset:6  }} style={{display:'flex',justifyContent:'end'}}>
                      <div className="footerBotRed">
                        Terms of Service
                      </div>
                  </Col>
                </Row>
              </div>
            </Footer>
          </div>
        </Layout>
      </Layout>
    );
  }
}
export default Index;