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
const columns = [
  {
    title: 'Txn Hash',
    dataIndex: 'txid',
    key: 'txid',
    ellipsis: true,
    render: (to) => (
      <Link to={{ pathname: '/transactionsDetail', state: { id: to } }} title={to}>
        {to}
      </Link>
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
    render: (text) => <Link to={{ pathname: '/blocksDetail', state: { id: text } }}>{text ? text : 'null'}</Link>,
  },
  {
    title: 'Age',
    dataIndex: 'block_time',
    key: 'block_time',
  },
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
      <Link to={{ pathname: '/Address', state: { id: to } }} title={to}>
        {to}
      </Link>
    ),
  },
  {
    title: 'Value',
    dataIndex: 'amount',
    key: 'amount',
    render: (to) => (
      <span>
        {to.toLocaleString()}
      </span>
    ),
  },
  {
    title: 'Txn Fee',
    dataIndex: 'price',
    key: 'price',
  },
];
class Address extends Component {
  state = {
    addressId:'',
    addressTopDetail:{},
    addressBottomDetail:[],
    balanceValue: 0,
  };
  constructor (props) {
    super(props)
    // this.getAddressTopDetail('0x8db97c7cece249c2b98bdc0226cc4c2a57bf52fc')
    this.getAddressTopDetail(props.location.state.id)

    this.state = {
      addressId:'',
      addressTopDetail:{},
      addressBottomDetail:[],
      balanceValue: 0,
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
      _this.getAddressBottomDetail(id,1)
      let localNumber = resData.data.balance.toLocaleString().replace(/([^,]*),([^,]*)$/g, '$1.$2')

      _this.setState({addressTopDetail:resData.data,addressId:id,balanceValue:localNumber});
    })
  }
  getAddressBottomDetail = (id,page) => {
    let _this = this
    request.get('/api/v1/wallet/'+id+'/txs?page='+page+'&offset=10').then(function(resData){
      _this.setState({addressBottomDetail:[]})
      for(let i in resData.data){
        resData.data[i].index = i+1
      }
      _this.setState({addressBottomDetail:resData.data,addressBottomTotal:resData.total});
    })
  }
  paginationChange = (page, pageSize) => {
    console.log(page, pageSize)
    this.getAddressBottomDetail(this.state.addressTopDetail,page.current)
  }
  render() {
    return (
      <div className="address-page">
        <div className="addressHeaderBox">
          <h2>address {this.state.addressId}</h2>
          <CopyFilled style={{fontSize:22}} onClick={()=>this.copyFunction('0x5425890298aed601595a70AB815c96711a31Bc65')}/>
        </div>

        <Row className="addressListBox">
          <Col xs={{ span: 24}} lg={{ span: 11 }}>
            <Card
              title="Overview"
              bordered={false}
              style={{
                width: '100%',
              }}
            >
              <div className="addressItemBigBox">
                  <div className="addressRedItem">Balance:</div>
                  <div className="addressGeryItem">{this.state.balanceValue}  SAMA</div>
              </div>
              <div className="addressItemBigBox" style={{height:20,border:'none'}}></div>
              <div className="addressItemBigBox" style={{height:20,border:'none'}}></div>
              {/* <div className="addressItemBigBox" style={{height:30,border:'none'}}></div> */}
            </Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 11,offset:2 }}>
          <Card
              title="More Info"
              bordered={false}
              style={{
                width: '100%',
              }}
            >
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
          }}>
            <div slot="title">
              <Tabs defaultActiveKey="1" items={items} onChange={this.onChange} />
              <h4>Latest {this.state.addressBottomTotal} from a total of {this.state.addressBottomTotal} transactions</h4>
            </div>
          <Table
            columns={columns}
            dataSource={this.state.addressBottomDetail}
            rowKey={(record) => record.index}
            pagination={{
              position: ['topRight', 'bottomRight'],
              total:this.state.addressBottomTotal,
            }}
            onChange={this.paginationChange}
          />
        </Card>
      </div>
    );
  }
}
export default withRouter(Address) ;