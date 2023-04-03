import './index.css'
import React, { Component } from "react";
import { Row, Col, Input, Select, Card, Table, Button, Divider } from "antd";
import { Link } from 'react-router-dom';
import Request from '../../request.ts';
import {withRouter} from "react-router-dom";


let request = new Request({});
const columns = [
  {
    title: 'Block',
    dataIndex: 'height',
    key: 'height',
    render: (text) => <Link to={{ pathname: '/blocksDetail', state: { id: text } }}>{text ? text : 'null'}</Link>,
  },
  {
    title: 'Date Time (UTC)',
    dataIndex: 'block_time',
    key: 'block_time',
  },
  {
    title: 'Txn',
    dataIndex: 'txs_total',
    key: 'txs_total',
  },
  {
    title: 'Hash',
    dataIndex: 'block_id',
    key: 'block_id',
    render: (text) => <Link to={{ pathname: '/blocksDetail', state: { id: text } }}>{text ? text : 'null'}</Link>,
  },
  // {
  //   title: 'Gas Used',
  //   dataIndex: 'cost',
  //   key: 'cost',
  // },
  {
    title: 'Gas Limit',
    dataIndex: 'cost',
    key: 'cost',
  },
  {
    title: 'Burned (SAMA)',
    dataIndex: 'price',
    key: 'price',
  },
];
class Blocks extends Component {
  state = {
    blocksList:[],
    blocksTotal: 0,
  };
  constructor (props) {
    super(props)
    this.getBlockList(1)
    this.state = {
      blocksList:[],
      blocksTotal: 0,
    };
  }
  getBlockList = function(page) {
    let _this = this

    request.get('/api/v1/home/blocks?page='+page+'&offset=10').then(function(resData){
      _this.setState({blocksList:[]})
      for(let i in resData.data){
        resData.data[i].index = i+1
      }
        _this.setState({blocksList:resData.data,blocksTotal:resData.total});
    })
  }
  paginationChange = (page, pageSize) => {
    console.log(page, pageSize)
    this.getBlockList(page.current)
  }
  render() {
    return (
      <div className="blocks-page">
        <div className="blocksHeaderBox">
          <h2>Blocks</h2>
          <div className="blocksHeaderNumber">🔥 Burnt Fees: 0 SAMA</div>
        </div>
        <Card
          bordered={false}
          style={{
            width: '100%',
          }}>
            <div slot="title">
              {/* <h4>Block  #20413166 to  #20413190 </h4> */}
              <div>(Total of {this.state.blocksTotal} blocks)</div>
            </div>
          <Table
            columns={columns}
            dataSource={this.state.blocksList}
            rowKey={(record) => record.index}
            pagination={{
              position: ['topRight', 'bottomRight'],
              total:this.state.blocksTotal,
            }}
            onChange={this.paginationChange}
          />
        </Card>
      </div>
    );
  }
}
export default withRouter(Blocks) ;