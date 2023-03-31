import './index.css'
import React, { Component } from "react";
import { Row, Col, Input, Select, Card, Table, Button, Divider } from "antd";
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Rank',
    dataIndex: 'key',
    rowScope: 'row',
    width: 70,
    onCell: (row,index) => (
      console.log(row,index)
    ),
  },
  {
    title: 'Address',
    dataIndex: 'Hash',
    key: 'Hash',
    ellipsis: true,
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name Tag',
    dataIndex: 'Block',
    key: 'Block',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Balance',
    dataIndex: 'burned',
    key: 'burned',
    ellipsis: true,
  },
  {
    title: 'Txn Count',
    dataIndex: 'limit',
    key: 'limit',
  },
];
const data = [
  {
    key: '1',
    Block: '20413190',
    createTime: '2023-03-30 8:33:10',
    from: '0xba30f7b0544164e37319db2ed50aa66461db824f4820421a3bab850444fdca36',
    to:'0xba30f7b0544164e37319db2ed50aa66461db824f4820421a3bab850444fdca36',
    Hash: '0xba30f7b0544164e37319db2ed50aa66461db824f4820421a3bab850444fdca36',
    used:'428,975 (5.36%)',
    limit:'20.3',
    fee:'0.00223',
    burned:'0.01173 SAMA',
    method:'Allocate To',
  },
  {
    key: '2',
    Block: '20413191',
    createTime: '2023-03-30 8:33:10',
    from: '0xba30f7b0544164e37319db2ed50aa66461db824f4820421a3bab850444fdca36',
    to:'0xba30f7b0544164e37319db2ed50aa66461db824f4820421a3bab850444fdca36',
    Hash: '0xba30f7b0544164e37319db2ed50aa66461db824f4820421a3bab850444fdca36',
    used:'428,975 (5.36%)',
    limit:'20.3',
    fee:'0.00223',
    burned:'0.01173 SAMA',
    method:'Allocate To',
  },
  {
    key: '3',
    Block: '20413192',
    createTime: '2023-03-30 8:33:10',
    from: '0xba30f7b0544164e37319db2ed50aa66461db824f4820421a3bab850444fdca36',
    to:'0xba30f7b0544164e37319db2ed50aa66461db824f4820421a3bab850444fdca36',
    Hash: '0xba30f7b0544164e37319db2ed50aa66461db824f4820421a3bab850444fdca36',
    used:'428,975 (5.36%)',
    limit:'20.3',
    fee:'0.00223',
    burned:'0.01173 SAMA',
    method:'Allocate To',
  },
];
class Accounts extends Component {
  state = {
    searchValue:'All Filters',
  };
  onSearch = (value) => console.log(value);
  searchHandleChange = (value) => {
    this.setState({searchValue:value});
  };
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
          }}>
            <div slot="title">
              <h4>A total of > 837,344 accounts found</h4>
              <div>(Showing the last 10,000 top accounts only)</div>
            </div>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  }
}
export default Accounts ;