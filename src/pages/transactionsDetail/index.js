import './index.css'
import React, { Component } from "react";
import { Card, Tooltip, Tabs, Divider, message } from "antd";
import { Link } from 'react-router-dom';
import {
  CheckCircleFilled,
  CopyFilled,
  QuestionCircleOutlined
} from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import Request from '../../request.ts';
import {withRouter} from "react-router-dom";

let request = new Request({});
const items = [
  {
    key: '1',
    label: `Overview`,
  }
];
class TransactionsDetail extends Component {
  state = {
    transactionsId: '',
    transactionsDetail:{},
  };
  constructor (props) {
    super(props)
    this.getTransactionsDetail(props.location.search.split("=")[1])
    this.state = {
      transactionsId: props.location.search.split("=")[1] ? props.location.search.split("=")[1] : '',
      transactionsDetail:{},
    };
  }
  getTransactionsDetail = (id) => {
    let _this = this
    request.get('/api/v1/txs/'+id).then(function(resData){
      resData.data.amountLocal = 0
      if(resData.data.amount){
        resData.data.amountLocal = resData.data.amount.toLocaleString().replace(/([^,]*),([^,]*)$/g, '$1.$2')
      }
      _this.setState({transactionsDetail:resData.data,transactionsId:id});
    })
  }
  onChange = (key) => {
    console.log(key);
  };
  copyFunction = (value) => {
    copy(value);
    message.success("Copy succeeded")
  }
  jumpBlockDetail = (id) => {
    // this.props.history.push({pathname:'/blocksDetail', state: { id: id } })
    this.props.history.push('/blocksDetail?id='+id)
  }
  jumpAddress = (id) => {
    // this.props.history.push({pathname:'/Address', state: { id: id } })
    this.props.history.push('/Address?id='+id)
  }
  render() {
    let info = navigator.userAgent;
    let isPhone = /mobile/i.test(info);
    return (
      <div className="transactionsDetail-page" style={{padding: isPhone ? '20px 0' : '80px 0'}}>
        <div className="transactionsDetailHeaderBox">
          <h2>Transaction Details</h2>
        </div>

        <Card
          bordered={false}
          style={{
            width: '100%',
          }}>
            <div slot="title">
              <Tabs defaultActiveKey="1" items={items} onChange={this.onChange} />
              {/* <h4 className="bgRed">[ This is a Avalanche Chain Testnet transaction only ]</h4> */}
            </div>
            <div slot="body">
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Transaction Hash:</div>
                  <div className="transactionsDetailGeryItem">
                    <span className="longChang" style={{width: '200px'}}>{this.state.transactionsDetail.txid}</span>
                    {
                      this.state.transactionsDetail.txid ?
                      <CopyFilled onClick={()=>this.copyFunction(this.state.transactionsDetail.txid)}/> : ''
                    }
                  </div>
              </div>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Status:</div>
                  <div className="transactionsDetailGeryItem">
                    <span className="successStatus"><CheckCircleFilled />Success</span>
                  </div>
              </div>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Block:</div>
                  <div className="transactionsDetailGeryItem redSpan">
                    <span className="redSpan cursorClass" onClick={() => this.jumpBlockDetail(this.state.transactionsDetail.block_height)}>
                      {this.state.transactionsDetail.block_height}
                    </span>
                  </div>
              </div>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Timestamp:</div>
                  <div className="transactionsDetailGeryItem">{this.state.transactionsDetail.block_time}</div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />From:</div>
                  <div className="transactionsDetailGeryItem">
                    <span className="longChang redSpan cursorClass" style={{width: '200px'}} onClick={() => {this.jumpAddress(this.state.transactionsDetail.from)}}>{this.state.transactionsDetail.from}</span>
                    {
                      this.state.transactionsDetail.from ?
                      <CopyFilled onClick={()=>this.copyFunction(this.state.transactionsDetail.from)}/> : ''
                    }
                  </div>
              </div>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />To:</div>
                  <div className="transactionsDetailGeryItem">
                    Address&nbsp;&nbsp;
                    <span className="longChang redSpan cursorClass"  style={{width: '200px'}} onClick={() => {this.jumpAddress(this.state.transactionsDetail.to)}}>{this.state.transactionsDetail.to}</span>
                    {
                      this.state.transactionsDetail.to ?
                      <CopyFilled onClick={()=>this.copyFunction(this.state.transactionsDetail.to)}/> : ''
                    }
                  </div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Value:</div>
                  <div className="transactionsDetailGeryItem" style={{display:"flex",flexWrap:'wrap'}}>
                    <span className="bgGrey">{this.state.transactionsDetail.amountLocal} SAMA </span>
                    <span>(${this.state.transactionsDetail.amountLocal})</span>
                  </div>
              </div>
              {/* <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Transaction Fee:</div>
                  <div className="transactionsDetailGeryItem">0.001382725 AVAX ($0.03)</div>
              </div> */}
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Gas Price:</div>
                  <div className="transactionsDetailGeryItem">{this.state.transactionsDetail.price}SAMA</div>
              </div>
              {/* <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Gas Limit & Usage by Txn:</div>
                  <div className="transactionsDetailGeryItem">55,332 | 55,309 (99.96%)</div>
              </div> */}
              {/* <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Gas Fees:</div>
                  <div className="transactionsDetailGeryItem">
                    <span>Base: 25 nAVAX</span>
                  </div>
              </div> */}
              {/* <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Burnt Fees:</div>
                  <div className="transactionsDetailGeryItem"><span className="bgOrange">🔥 Burnt: 0.001382725 SAMA</span></div>
              </div> */}
              {/* <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Other Attributes:</div>
                  <div className="transactionsDetailGeryItem">
                    <span className="bgGrey"><span className="greySpan">Txn Type:</span> 0 (Legacy)</span>
                    <span className="bgGrey"><span className="greySpan">Nonce:</span> 1178</span>
                    <span className="bgGrey"><span className="greySpan">Position:</span> 0</span>
                  </div>
              </div>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Input Data:</div>
                  <div className="transactionsDetailGeryItem">
                  <span className="longChang redSpan">0x16eb1e8c5ec64a333d2764e1ab45a5bd45bca3a6ac98fc29d6f8c0d5e4a89b9a</span><CopyFilled onClick={()=>this.copyFunction('复制的内容')}/>
                  </div>
              </div> */}
            </div>
        </Card>
      </div>
    );
  }
}
export default withRouter(TransactionsDetail) ;