import './index.css'
import React, { Component } from "react";
import { Row, Col, Input, Select, Card, Table, Button, Divider } from "antd";
import { Link } from 'react-router-dom';
import Request from '../../request.ts';
import {transferDigit} from '../../utils/calculate'

let request = new Request({});


class Accounts extends Component {
  state = {
    searchValue:'All Filters',
    accountId:'',
    acountList:[],
    isId:'',
    accountTotal: 0,
    current:1,
    pageSize:50,
  };
  onSearch = (value) => console.log(value);
  searchHandleChange = (value) => {
    this.setState({searchValue:value});
  };

  getAccountListNoId = (page,pageSize) => {
    let _this = this
    request.get('/api/v1/top/account?page='+page+'&offset='+pageSize).then(function(resData){
  
      _this.setState({transactionsList:[]});
      for(let i in resData.data){
        if(resData.data[i].balance){
          if(resData.data[i].balance < 1000000000){
            resData.data[i].balance = resData.data[i].balance ? resData.data[i].balance/1000000000 : 0
          }else{
            resData.data[i].balance = resData.data[i].balance ? transferDigit(resData.data[i].balance/1000000000) : resData.data[i].balance
          }
  
        }
        // resData.data[i].amountLocal = resData.data[i].amount ? resData.data[i].amount.toLocaleString().replace(/([^,]*),([^,]*)$/g, '$1.$2') : resData.data[i].amount
        resData.data[i].index = i+1
      }
      _this.setState({accountList:resData.data, accountsTotal:resData.total});
    })
  }
  constructor (props) {
    super(props)
    // console.log(props,'transactions')
    let _this = this
    if(!props.location.search){
        this.getAccountListNoId(_this.state.current,_this.state.pageSize)
        this.state.isId = false
    }else{
      this.getAccountListId(props.location.search.split("=")[1],_this.state.current,_this.state.pageSize)
      this.state.isId = true
    }
    this.state = {
      transactionsId: props.location.search ? props.location.search.split("=")[1] : '',
      accountList:[],
      isId:'',
      current:1,
      pageSize:50,
      isId:'',
      accountTotal: 0,
      columns:[
        {
          title: 'Address',
          dataIndex: 'address',
          rowScope: 'row',
          ellipsis: true,
          render: (to) => (
            <a onClick={() => _this.props.history.push('/Address?id='+to)} title={to}>
              {to}
            </a>
          ),
        },
        {
          title: 'Create_time',
          dataIndex: 'created_at',
          key: 'created_at',
          render: (text) => <span>{text}</span>,
        },
        {
          title: 'Balance',
          dataIndex: 'balance',
          key: 'balance',
          ellipsis: true,
          render: (text) => <span>{text}</span>,
        },
        {
          title: 'Percent',
          dataIndex: 'percent',
          key: 'percent',
          ellipsis: true,
        },
      ]
    };
  }
  paginationChange = (page, pageSize) => {
    this.setState({
      current:page.current,
      pageSize:page.pageSize
    })
    this.getAccountListNoId(page.current,page.pageSize)
  }
  // componentDidUpdate() {
  //   console.log("8888")
  //   let _this = this
  //   this.getAccountListNoId(_this.state.current,_this.state.pageSize)
  //   this.setState({isId:false})
  // }
  render() {
    return (
      <div className="accounts-page">
        <div className="accountsHeaderBox">
          <h2>Top Accounts by AVAX Balance </h2>
        </div>
        <Card
          bordered={false}
          style={{
            width: '100%',
            backgroundColor: '#1c1c1c',
            color: '#FFFFFF99'
          }}>
            <div slot="title">
              <h4>A total of &gt; {this.state.accountsTotal} accounts found</h4>
              <div>(Showing the last 50 top accounts only)</div>
            </div>
          <Table 
          columns={this.state.columns} 
          dataSource={this.state.accountList} 
          // scroll={{
          //   x: 1300,
          // }}
          rowKey={(record) => record.index}
          pagination= {{
            defaultPageSize: 20
          }}
          // pagination={{
          //   position: ['bottomRight'],
          //   pageSize: 20,
          //   current: this.state.current,
          //   total:this.state.accountsTotal > 50 ? 50: this.state.accountsTotal,
          //   size: 'small',
          //   showSizeChanger: false,
          // }}
          // onChange={this.paginationChange}
          />
        </Card>
      </div>
    );
  }
}
export default Accounts ;