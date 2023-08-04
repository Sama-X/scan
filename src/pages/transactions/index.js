import './index.css'
import React, { Component } from "react";
import { Row, Col, Input, Select, Card, Table, Tooltip, Button, Divider } from "antd";
import { Link } from 'react-router-dom';
import Request from '../../request.ts';
import {transferDigit} from '../../utils/calculate'
import {withRouter} from "react-router-dom";

let request = new Request({});
class Transactions extends Component {
  state = {
    transactionsId:'',
    transactionsList:[],
    isId:'',
    transactionsTotal: 0,
    current:1,
    pageSize:20,
  };
  constructor (props) {
    super(props)
    // console.log(props,'transactions')
    let _this = this
    if(!props.location.search){
        this.getTransactionsListNoId(_this.state.current,_this.state.pageSize)
        this.state.isId = false
    }else{
      this.getTransactionsListId(props.location.search.split("=")[1],_this.state.current,_this.state.pageSize)
      this.state.isId = true
    }
    this.state = {
      transactionsId: props.location.search ? props.location.search.split("=")[1] : '',
      transactionsList:[],
      isId:'',
      transactionsTotal: 0,
      current:1,
      pageSize:20,
      columns:[
        {
          title: 'Txn Hash',
          dataIndex: 'txid',
          key: 'txid',
          ellipsis: true,
          render: (to) => (
            <a onClick={() => _this.props.history.push('/transactionsDetail?id='+to)} title={to}>
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
              {method ? method : 'null'}
            </Tooltip>
          ),
        },
        {
          title: 'Block',
          dataIndex: 'block_height',
          key: 'block_height',
          render: (text) => <a onClick={() => _this.props.history.push('/blocksDetail?id='+text)}>{text}</a>,
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
            <a onClick={() => _this.props.history.push('/Address?id='+to)} title={to}>
              {to}
            </a>
          ),
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
      ],
    };
  }
  getTransactionsListNoId = (page,pageSize) => {
    let _this = this
    request.get('/api/v1/home/txs?page='+page+'&offset='+pageSize).then(function(resData){
      _this.setState({transactionsList:[]});
      for(let i in resData.data){
        if(resData.data[i].amount){
          if(resData.data[i].amount < 1000000000){
            resData.data[i].amountLocal = resData.data[i].amount ? resData.data[i].amount/1000000000 : 0
          }else{
            resData.data[i].amountLocal = resData.data[i].amount ? transferDigit(resData.data[i].amount/1000000000) : resData.data[i].amount
          }
          resData.data[i].price = transferDigit(resData.data[i].price/1000000000)
        }
        // resData.data[i].amountLocal = resData.data[i].amount ? resData.data[i].amount.toLocaleString().replace(/([^,]*),([^,]*)$/g, '$1.$2') : resData.data[i].amount
        resData.data[i].index = i+1
      }
      _this.setState({transactionsList:resData.data,transactionsTotal:resData.total});
    })
  }
  getTransactionsListId= (id,page,pageSize) => {
    let _this = this
    let data = []
    request.get('/api/v1/blocks/'+id+'/txs?page='+page+'&offset='+pageSize).then(function(resData){
      _this.setState({transactionsList:[]});
      for(let i in resData.data){
        if(resData.data[i].amount){
          if(resData.data[i].amount < 1000000000){
            resData.data[i].amountLocal = resData.data[i].amount ? resData.data[i].amount/1000000000 : 0
          }else{
            resData.data[i].amountLocal = resData.data[i].amount ? transferDigit(resData.data[i].amount/1000000000) : resData.data[i].amount
          }
        }
        // resData.data[i].amountLocal = resData.data[i].amount ? resData.data[i].amount.toLocaleString().replace(/([^,]*),([^,]*)$/g, '$1.$2') : resData.data[i].amount
        resData.data[i].index = i+1
      }
      _this.setState({transactionsList:resData.data,transactionsId:id,transactionsTotal:resData.total});
    })
  }
  paginationChange = (page, pageSize) => {
    console.log(page, pageSize)
    this.setState({
      current:page.current,
      pageSize:page.pageSize
    })
    if(this.state.isId){
      this.getTransactionsListId(this.state.getTransactionsListId,page.current,page.pageSize)
    }else{
      this.getTransactionsListNoId(page.current,page.pageSize)
    }
  }
  onSearch = (value) => console.log(value);
  searchHandleChange = (value) => {
    this.setState({searchValue:value});
  };
  componentDidUpdate(prevProps) {
    let _this = this
    if(JSON.stringify(this.props.location.search) !== JSON.stringify(prevProps.location.search)){
      if(!this.props.location.search){
        this.getTransactionsListNoId(_this.state.current,_this.state.pageSize)
        this.setState({isId:false})
      }else{
        this.getTransactionsListId(_this.props.location.search.split("=")[1],_this.state.current,_this.state.pageSize)
        this.setState({isId:true})
      }
    }
  }
  render() {
    let info = navigator.userAgent;
    let isPhone = /mobile/i.test(info);
    return (
      <div className="transactions-page" style={{padding: isPhone ? '20px 0' : '80px 0'}}>
        <div className="transactionsHeaderBox">
          <h2>Transactions</h2>
        </div>
        <Card
          bordered={false}
          style={{
            width: '100%',
            backgroundColor: '#1c1c1c',
            color: '#FFFFFF99'
          }}>
            <div slot="title">
              <h4>More than &gt; {this.state.transactionsTotal} transactions found</h4>
              <div>(Showing the last {this.state.transactionsTotal}k records)</div>
            </div>
          <Table
            bordered={false}
            columns={this.state.columns}
            dataSource={this.state.transactionsList}
            rowKey={(record) => record.index}
            pagination={{
              position: ['bottomRight'],
              pageSize: this.state.pageSize,
              current: this.state.current,
              total:this.state.transactionsTotal,
              size: 'small',
              showSizeChanger: false,
            }}
            scroll={{
              x: 1300,
            }}
            onChange={this.paginationChange}
          />
        </Card>
      </div>
    );
  }
}
export default withRouter(Transactions) ;