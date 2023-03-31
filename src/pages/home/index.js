import './index.css'
import React, { Component } from "react";
import { Row, Col, Input, Select, Card, Button, Divider, AutoComplete } from "antd";
import { Link } from 'react-router-dom';
import Request from '../../request.ts';
import {withRouter} from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';


let request = new Request({});

const selectOption = [
  {
    label:'All Filters',
    value:'All Filters',
  },
  {
    label:'Addresses',
    value:'Addresses',
  },
  {
    label:'Tokens',
    value:'Tokens',
  },
  {
    label:'Name Tags',
    value:'Name Tags',
  },
  {
    label:'Labels',
    value:'Labels',
  },
  {
    label:'Websites',
    value:'Websites',
  }
]
const renderTitle = (title) => (
  <span>
    {title}
  </span>
);
const renderItem = (title, count) => ({
  value: count+title,
  label: title,
});
const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];
const { Search } = Input;

class Home extends Component {
  state = {
    searchValue:'All Filters',
    blocksList:[],
    transactionsList:[],
    autoList:[],
  };
  constructor (props) {
    super(props)
    this.getBlockList()
    this.getTransactionsList()
    this.state = {
      searchValue:'All Filters',
      blocksList:[],
      transactionsList:[],
      autoList:[],
    };
  }
  onSearch = (value) => console.log(value);
  searchHandleChange = (value) => {
    this.setState({searchValue:value});
  };
  getBlockList = function() {
    let _this = this
    request.get('/api/v1/home/blocks?page=1&offset=20').then(function(resData){
        _this.setState({blocksList:resData.data});
    })
  }
  getTransactionsList = function() {
    let _this = this
    request.get('/api/v1/home/txs?page=1&offset=20').then(function(resData){
        _this.setState({transactionsList:resData.data});
    })
  }
  changeAutoList = (e) => {
    let optionList = []
    let addressList = []
    let blocksList = []
    let txsList = []
    let _this = this
    request.get('/api/v1/home/search?keyword='+e).then(function(resData){
      console.log(resData,'ghjkl')
      if(resData.data){
        if(resData.data.address.length > 0){
          // addressList = resData.data.address
          for(let i in resData.data.address){
            addressList.push(renderItem(resData.data.address[i], 'address'))
          }
        }
        if(resData.data.blocks.length > 0){
          // blocksList = resData.data.blocks
          for(let i in resData.data.blocks){
            blocksList.push(renderItem(resData.data.blocks[i], 'blocks'))
          }
        }
        if(resData.data.txs.length > 0){
          // txsList = resData.data.txs
          for(let i in resData.data.txs){
            txsList.push(renderItem(resData.data.txs[i], 'txs'))
          }
        }
      }
      optionList = [
        {
          label:renderTitle('address'),
          options:addressList
        },
        {
          label:renderTitle('blocks'),
          options:blocksList
        },
        {
          label:renderTitle('txs'),
          options:txsList
        }
      ]
      _this.setState({autoList: optionList})
    })
  }
  autoSelect = (value,option) => {
    console.log(value,'va')
    console.log(option,'op')
    console.log(value.indexOf('blocks'),'op')
    if(value.indexOf('address') == 0){
      this.jumpAddress(option.label)
    }else if(value.indexOf('blocks') == 0){
      this.jumpBlockDetail(option.label)
    }else if(value.indexOf('txs') == 0){
      this.jumpTransactionDetail(option.label)
    }
  }
  jumpBlockDetail = (id) => {
    this.props.history.push({pathname:'/blocksDetail', state: { id: id } })
  }
  jumpTransactionDetail = (id) => {
    this.props.history.push({pathname:'/transactionsDetail', state: { id: id } })
  }
  jumpAddress = (id) => {
    this.props.history.push({pathname:'/Address', state: { id: id } })
  }
  render() {
    return (
      <div className="home-page">
        <div className="homeSearchBox">
          <h2>Sama C-Chain Testnet Explorer</h2>
          <div className='homeSearchInput'>
            {/* <Select
              className='homeSearchSelect'
              allowClear
              options={selectOption.map((item) => ({ label: item.label, value: item.value }))}
              value={this.state.searchValue}
              style={{
                width: "10%",
                // marginTop: '8px'
              }}
              onChange={this.searchHandleChange}
              ></Select> */}
              <AutoComplete
                popupClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                style={{
                  width: "100%",
                }}
                options={this.state.autoList}
                onChange={this.changeAutoList}
                onSelect={this.autoSelect}
              >
              <Input.Search size="large" placeholder="Search by Address / Txn Hash / Block / Token" />
            </AutoComplete>
          </div>
          {/* <Search className='homeSearchInput' addonBefore={

          } onSearch={this.onSearch} allowClear placeholder="Search by Address / Txn Hash / Block / Token" /> */}
        </div>
        <Row className="homeListBox">
          <Col xs={{ span: 24}} lg={{ span: 11 }}>
            <Card
              title="Latest Blocks"
              bordered={false}
              style={{
                width: '100%',
              }}
              actions={[<Button style={{width: '90%',background:'rgba(232,65,66,.1)'}} danger type="text"><Link to="/blocks" style={{color:'#ff4d4f'}}>View all blocks</Link></Button>]}
            >
              <div className="homeItemBigBox">
              {
                this.state.blocksList.length > 0 ?
                  this.state.blocksList.map((item,index) => (
                    <div key={index}>
                      <Row className="homeItembox">
                        <Col xs={{ span: 13}} lg={{ span: 13 }} className="homeLeftItem">
                        {/* <Col xs={{ span: 6}} lg={{ span: 6 }} className="homeLeftItem"> */}
                          <div className="homeBack">BK</div>
                          <div>
                            <div className="homeRedItem cursorClass" onClick={() => this.jumpBlockDetail(item.height)}>{item.height}</div>
                            <div className="homeGeryItem">{item.block_time}</div>
                          </div>
                        </Col>
                        <Col xs={{ span: 11}} lg={{ span: 11 }} className="homeCenterItem">
                          <div style={{display: 'flex'}}>Hash <span className="homeRedItem homeItemOne cursorClass"  onClick={() => this.jumpBlockDetail(item.block_id)}>{item.block_id}</span></div>
                          <div className="homeGeryItem"><span className="homeRedItem">{item.txs_total} txns</span>in {item.txs_total} sec</div>
                        </Col>
                        {/* <Col xs={{ span: 7}} lg={{ span: 5}} className="homeRightItem">
                          <div>
                            🔥 0
                            <b>.</b>
                            03105 SAMA
                          </div>
                        </Col> */}
                      </Row>
                      <Divider/>
                    </div>
                  ))
                :''
              }

              </div>

            </Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 11,offset:2 }}>
          <Card
              title="Latest Transactions"
              bordered={false}
              style={{
                width: '100%',
              }}
              actions={[<Button style={{width: '90%',background:'rgba(232,65,66,.1)'}} danger type="text"><Link to="/transactions" style={{color:'#ff4d4f'}}>View all transactions</Link></Button>]}
            >
              <div className="homeItemBigBox">
              {
                this.state.transactionsList.length > 0 ?
                  this.state.transactionsList.map((item,index) => (
                    <div key={index}>
                      <Row className="homeItembox">
                        <Col xs={{ span: 8}} lg={{ span: 8 }} className="homeLeftItem">
                          <div className="homeBack homeTx">Tx</div>
                          <div>
                            <div className="homeRedItem longChang cursorClass" onClick={()=>this.jumpTransactionDetail(item.txid)}>{item.txid}</div>
                            <div className="homeGeryItem">{item.block_time}</div>
                          </div>
                        </Col>
                        <Col xs={{ span: 11}} lg={{ span: 11 }} className="homeCenterItem">
                          <div style={{display: 'flex'}}>From： <span onClick={()=>this.jumpAddress(item.from)} className="homeRedItem homeItemOne cursorClass">{item.from}</span></div>
                          <div style={{display: 'flex'}}>To： <span onClick={()=>this.jumpAddress(item.to)} className="homeRedItem homeItemOne cursorClass">{item.to}</span></div>
                        </Col>
                        <Col xs={{ span: 5}} lg={{ span: 5}} className="homeRightItem">
                          <div>
                            {item.amount} SAMA
                          </div>
                        </Col>
                      </Row>
                      <Divider/>
                    </div>
                  ))
                  :''
              }

              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(Home) ;