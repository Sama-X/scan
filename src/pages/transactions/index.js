import './index.css'
import React, { Component } from "react";
import { Row, Col, Input, Select, Card, Table, Tooltip, Button, Divider } from "antd";
import { Link } from 'react-router-dom';
import Request from '../../request.ts';
import {withRouter} from "react-router-dom";

let request = new Request({});
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
        {method ? method : 'null'}
      </Tooltip>
    ),
  },
  {
    title: 'Block',
    dataIndex: 'block_height',
    key: 'block_height',
    render: (text) => <Link to={{ pathname: '/blocksDetail', state: { id: text } }}>{text}</Link>,
  },
  {
    title: 'Date Time (UTC)',
    dataIndex: 'block_time',
    key: 'block_time',
    render: (text) => <span>{text ? text : 'null'}</span>,
  },
  {
    title: 'From',
    dataIndex: 'from',
    ellipsis: true,
    key: 'from',
    render: (to) => (
      <Link to={{ pathname: '/Address', state: { id: to } }} title={to}>
        {to}
      </Link>
    ),
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
  },
  // {
  //   title: 'Txn Fee',
  //   dataIndex: 'fee',
  //   key: 'fee',
  // },
  {
    title: 'Gas Price',
    dataIndex: 'price',
    key: 'price',
  },
];
class Transactions extends Component {
  state = {
    transactionsId:'',
    transactionsList:[],
  };
  constructor (props) {
    super(props)
    if(!props.location.state){
        this.getTransactionsListNoId()
    }else{
      this.getTransactionsListId(props.location.state.id)
    }
    this.state = {
      transactionsId: props.location.state ? props.location.state.id : '',
      transactionsList:[],
    };
  }
  getTransactionsListNoId = () => {
    let _this = this
    request.get('/api/v1/home/txs?page=1&offset=20').then(function(resData){

      _this.setState({transactionsList:resData.data});
    })
  }
  getTransactionsListId= (id) => {
    let _this = this
    let data = []
    request.get('/api/v1/blocks/'+id+'/txs').then(function(resData){
      _this.setState({transactionsList:resData.data,transactionsId:id});
    })
  }
  onSearch = (value) => console.log(value);
  searchHandleChange = (value) => {
    this.setState({searchValue:value});
  };
  render() {
    return (
      <div className="transactions-page">
        <div className="transactionsHeaderBox">
          <h2>Transactions</h2>
        </div>
        <Card
          bordered={false}
          style={{
            width: '100%',
          }}>
            <div slot="title">
              <h4>More than > 65,277,407 transactions found</h4>
              <div>(Showing the last 500k records)</div>
            </div>
          <Table columns={columns} dataSource={this.state.transactionsList} rowKey={(record) => record.txid}/>
        </Card>
      </div>
    );
  }
}
export default withRouter(Transactions) ;