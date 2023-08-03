import './index.css'
import React, { Component } from "react";
import { Row, Col, message, Card, Table, Tooltip, Tabs, Avatar } from "antd";
import { Link } from 'react-router-dom';
import {
  CopyFilled
} from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import Request from '../../request.ts';
import {withRouter} from "react-router-dom";

let request = new Request({});
const items = [
  {
    key: '1',
    label: `Transactions`,
  }
];

class Address extends Component {
  state = {
    addressId:'',
    addressTopDetail:{},
    addressBottomDetail:[],
    balanceValue: 0,
    columns: [],
    current:1,
    pageSize:20,
  };
  constructor (props) {
    super(props)
    // this.getAddressTopDetail('0x8db97c7cece249c2b98bdc0226cc4c2a57bf52fc')
    this.getAddressTopDetail(props.location.search.split("=")[1])
    let _this = this
    this.state = {
      addressId:'',
      addressTopDetail:{},
      addressBottomDetail:[],
      balanceValue: 0,
      columns: [
        {
          title: 'Txn Hash',
          dataIndex: 'txid',
          key: 'txid',
          ellipsis: true,
          render: (to) => (
            <a  onClick={() => _this.props.history.push('/transactionsDetail?id='+to)} title={to}>
              {to}
            </a>
          ),
        },
        {
          title: 'Method',
          dataIndex: 'method',
          key: 'method',
          ellipsis: {
            showTitle: false,
          },
          render: (method) => (
            <Tooltip placement="topLeft" title={method}>
              {method}
            </Tooltip>
          ),
        },
        {
          title: 'Block',
          dataIndex: 'block_height',
          key: 'block_height',
          render: (text) => <a onClick={() => _this.props.history.push('/blocksDetail?id='+text)}>
            {text}
          </a>,
        },
        // {
        //   title: 'Age',
        //   dataIndex: 'block_time',
        //   key: 'block_time',
        // },
        {
          title: 'Date Time (UTC)',
          dataIndex: 'block_time',
          key: 'block_time',
        },
        {
          title: 'From',
          dataIndex: 'from',
          ellipsis: true,
          key: 'from',
        },

        {
          title: 'To',
          dataIndex: 'to',
          ellipsis: true,
          key: 'to',
          render: (to) => (
            <a onClick={() => _this.props.history.push('/Address?id='+to)} title={to}>
              {to}
            </a>
          ),
        },
        {
          title: 'Value',
          dataIndex: 'amountLocal',
          key: 'amountLocal',
          // render: (to) => (
          //   <span>
          //     {to.toLocaleString()}
          //   </span>
          // ),
        },
        {
          title: 'Txn Fee',
          dataIndex: 'price',
          key: 'price',
        },
      ],
      current:1,
      pageSize:20,
    };
  }

  onChange = (key) => {
    console.log(key);
  };
  copyFunction = (value) => {
    copy(value);
    message.success("Copy succeeded")
  }
  getAddressTopDetail = (id) => {
    let _this = this
    request.get('/api/v1/wallet/'+id).then(function(resData){
      _this.getAddressBottomDetail(id,_this.state.current,_this.state.pageSize)
      let localNumber = 0
      if(resData.data.balance < 1000000000){
        localNumber = resData.data.balance ? resData.data.balance/1000000000 : 0
      }else{
        console.log('xxxx=', resData.data.balance/1000000000)
        let reg = (resData.data.balance/1000000000).toString().indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
        localNumber = (resData.data.balance/1000000000).toString().replace(reg,"$1,");
      }

      _this.setState({addressTopDetail:resData.data,addressId:id,balanceValue:localNumber});
    })
  }
  getAddressBottomDetail = (id,page,pageSize) => {
    let _this = this
    request.get('/api/v1/wallet/'+id+'/txs?page='+page+'&offset='+pageSize).then(function(resData){
      _this.setState({addressBottomDetail:[]})
      for(let i in resData.data){
        if(resData.data[i].amount < 1000000000){
          resData.data[i].amountLocal = resData.data[i].amount ? resData.data[i].amount/1000000000 : 0
        }else{
          resData.data[i].amountLocal = resData.data[i].amount ? resData.data[i].amount.toLocaleString().replace(/([^,]*),([^,]*)$/g, '$1.$2') : resData.data[i].amount
        }
        resData.data[i].index = i+1
      }
      _this.setState({addressBottomDetail:resData.data,addressBottomTotal:resData.total});
    })
  }
  paginationChange = (page, pageSize) => {
    console.log(page, pageSize)
    this.setState({
      current:page.current,
      pageSize:page.pageSize
    })
    this.getAddressBottomDetail(this.state.addressId,page.current,page.pageSize)
  }
  jumpBlockDetail = (id) => {
    this.props.history.push('/blocksDetail?id='+id)
    // this.props.history.push({pathname:'/blocksDetail', state: { id: id } })
  }
  componentDidUpdate(prevProps) {
    let _this = this
    if(JSON.stringify(this.props.location.search) !== JSON.stringify(prevProps.location.search)){
      _this.getAddressTopDetail(_this.props.location.search.split("=")[1])
      _this.setState({addressId:_this.props.location.search.split("=")[1]})
    }
  }
  render() {
    let info = navigator.userAgent;
    let isPhone = /mobile/i.test(info);
    return (
      <div className="address-page" style={{padding: isPhone ? '20px 0' : '80px 0'}}>
        <div className="addressHeaderBox">
          <h2 style={{display:"flex",flexWrap:'wrap',width:'100%'}}>
            <span>address&nbsp;&nbsp;</span>
            <span className="longChang" style={{width: isPhone ? '280px' : 'auto'}}>
              {this.state.addressId}
            </span>
            <CopyFilled style={{fontSize:22}} onClick={()=>this.copyFunction('0x5425890298aed601595a70AB815c96711a31Bc65')}/>
          </h2>
        </div>

        <Row className="addressListBox">
          <Col xs={{ span: 24}} lg={{ span: 11 }}>
            <Card
              bordered={false}
              headStyle={{color: '#fff'}}
              style={{
                width: '100%',
                marginBottom: '20px',
                backgroundColor: '#1c1c1c',
                color: '#fff'
              }}
            >
              <div className="addressItemBigBox addressMoreInfo">
              Overview
              </div>
              <div className="addressItemBigBox">
                  <div className="addressRedItem">Balance:</div>
                  <div className="addressGeryItem">{this.state.balanceValue}  DND</div>
              </div>
              <div className="addressItemBigBox" style={{height:20,border:'none'}}></div>
              <div className="addressItemBigBox" style={{height:20,border:'none'}}></div>
              {/* <div className="addressItemBigBox" style={{height:30,border:'none'}}></div> */}
            </Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 11,offset:2 }}>
          <Card
              bordered={false}
              headStyle={{color: '#fff'}}
              style={{
                width: '100%',
                marginBottom: '20px',
                backgroundColor: '#1c1c1c',
                color: '#fff'
              }}
            >
              <div className="addressItemBigBox addressMoreInfo">
                  More Info
              </div>
              <div className="addressItemBigBox">
                  <div className="addressRedItem">My Name Tag:</div>
                  <div className="addressGeryItem">Not Available</div>
              </div>
              <div className="addressItemBigBox">
                  <div className="addressRedItem">Creator:</div>
                  <div className="addressGeryItem">
                    <span>No Data</span>
                    {/* <span className="redSpan longChang">0x4f52a68d34287C9B17C6496BBE885f26B1F203C2</span>
                    <span>at txn</span>
                    <span className="redSpan longChang">0x4f52a68d34287C9B17C6496BBE885f26B1F203C2</span> */}
                  </div>
              </div>
              {/* <div className="addressItemBigBox">
                  <div className="addressRedItem">TokenTracker:</div>
                  <div className="addressGeryItem">
                    <Avatar size={16} src={require("../../assets/ava_letter_icon.png")} />
                    USD//C (USDC)
                  </div>
              </div> */}
            </Card>
          </Col>
        </Row>
        <Card
          bordered={false}
          style={{
            width: '100%',
            backgroundColor: '#1c1c1c'
          }}>
            <div slot="title">
              <Tabs defaultActiveKey="1" items={items} onChange={this.onChange} />
              <h4 style={{color: '#FFFFFF99'}}>Latest {this.state.addressBottomTotal} from a total of {this.state.addressBottomTotal} transactions</h4>
            </div>
          <Table
            columns={this.state.columns}
            dataSource={this.state.addressBottomDetail}
            rowKey={(record) => record.index}
            pagination={{
              position: ['bottomRight'],
              pageSize: this.state.pageSize,
              current: this.state.current,
              total:this.state.addressBottomTotal,
            }}
            scroll={{
              x: 1300,
            }}
            onChange={this.paginationChange}
            onShowSizeChange={this.onShowSizeChange}
          />
        </Card>
      </div>
    );
  }
}
export default withRouter(Address) ;