import './index.css'
import React, { Component } from "react";
import { Row, Col, Input, Select, Card, Table, Button, Divider } from "antd";
import { Link } from 'react-router-dom';
import Request from '../../request.ts';
import {withRouter} from "react-router-dom";


let request = new Request({});
class Blocks extends Component {
  state = {
    blocksList:[],
    blocksTotal: 0,
    current:1,
    pageSize:20,
  };
  constructor (props) {
    super(props)
    let _this = this
    this.getBlockList(_this.state.current,_this.state.pageSize)
    this.state = {
      blocksList:[],
      blocksTotal: 0,
      current:1,
      pageSize:20,
      columns:[
        {
          title: 'Block',
          dataIndex: 'height',
          key: 'height',
          render: (text) => <a onClick={() => _this.props.history.push('/blocksDetail?id='+text)}>{text}</a>,
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
          render: (text) => <a onClick={() => _this.props.history.push('/blocksDetail?id='+text)}>{text}</a>,
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
      ],
    };
  }
  getBlockList = function(page,pageSize) {
    let _this = this

    request.get('/api/v1/home/blocks?page='+page+'&offset='+pageSize).then(function(resData){
      _this.setState({blocksList:[]})
      for(let i in resData.data){
        resData.data[i].index = i+1
      }
        _this.setState({blocksList:resData.data,blocksTotal:resData.total});
    })
  }
  paginationChange = (page, pageSize) => {
    console.log(page, pageSize)
    this.setState({
      current:page.current,
      pageSize:page.pageSize
    })
    this.getBlockList(page.current,page.pageSize)
  }
  render() {
    let info = navigator.userAgent;
    let isPhone = /mobile/i.test(info);
    return (
      <div className="blocks-page" style={{padding: isPhone ? '20px 0' : '80px 0'}}>
        <div className="blocksHeaderBox">
          <h2>Blocks</h2>
          <div className="blocksHeaderNumber">
            <span>🔥 Burnt Fees: 0 SAMA</span>
          </div>
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
            columns={this.state.columns}
            dataSource={this.state.blocksList}
            rowKey={(record) => record.index}
            pagination={{
              position: ['topRight', 'bottomRight'],
              pageSize: this.state.pageSize,
              current: this.state.current,
              total:this.state.blocksTotal,
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
export default withRouter(Blocks) ;