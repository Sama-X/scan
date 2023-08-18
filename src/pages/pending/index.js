import './index.css'
import React, { Component } from "react";
import { Row, Col, Input, Select, Card, Table, Button, Divider } from "antd";
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Txn Hash',
    dataIndex: 'Hash',
    key: 'Hash',
    ellipsis: true,
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nonce',
    dataIndex: 'Block',
    key: 'Block',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Last Seen',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: 'Gas Limit',
    dataIndex: 'limit',
    key: 'limit',
  },

  {
    title: 'Gas Price',
    dataIndex: 'fee',
    key: 'fee',
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
    ellipsis: true,
  },
  {
    title: 'To',
    dataIndex: 'burned',
    key: 'burned',
    ellipsis: true,
  },
  {
    title: 'Value',
    dataIndex: 'burned',
    key: 'burned',
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
    burned:'0.01173 tDND',
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
    burned:'0.01173 tDND',
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
    burned:'0.01173 tDND',
    method:'Allocate To',
  },
];
class Pending extends Component {
  state = {
    searchValue:'All Filters',
  };
  onSearch = (value) => console.log(value);
  searchHandleChange = (value) => {
    this.setState({searchValue:value});
  };
  render() {
    return (
      <div className="pending-page">
        <div className="pendingHeaderBox">
          <h2>Pending Transactions</h2>
        </div>
        <Card
          title="A total of 0 pending txns found"
          bordered={false}
          style={{
            width: '100%',
          }}>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  }
}
export default Pending ;