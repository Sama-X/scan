import './index.css'
import React, { Component } from "react";
import { Card, Tooltip, Tabs, Divider, message } from "antd";
import { Link } from 'react-router-dom';
import {
  CheckCircleFilled,
  CopyFilled,
  QuestionCircleOutlined,
  LeftCircleFilled,
  RightCircleFilled
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


class BlocksDetail extends Component {
  state = {
    blockId:'',
    blocksDetail:{},
  };
  constructor (props) {
    super(props)
    this.getBlockDetail(props.location.search.split("=")[1])
    this.state = {
      blockId:props.location.search.split("=")[1],
      blocksDetail:{},
    };
  }
  onChange = (key) => {
    // console.log(key);
  };
  copyFunction = (value) => {
    copy(value);
    message.success("Copy succeeded")
  }
  getBlockDetail = (id) => {
    let _this = this
    request.get('/api/v1/blocks/'+id).then(function(resData){
      _this.setState({blocksDetail:resData.data,blockId:id});
    })
  }
  jumpTransaction = (id) => {
    this.props.history.push('/transactions?id='+id)
  }
  render() {
    let info = navigator.userAgent;
    let isPhone = /mobile/i.test(info);
    return (
      <div className="transactionsDetail-page" style={{padding: isPhone ? '20px 0' : '80px 0'}}>
        <div className="transactionsDetailHeaderBox">
          <h2 style={{display:"flex",flexWrap:'wrap',width:'100%'}}>
            <span>Block&nbsp;&nbsp;</span>
            <span className="longChang" style={{width: isPhone ? '280px' : 'auto',lineHeight:'24px'}}>
              #{this.state.blockId}
            </span>
            {/* <CopyFilled style={{fontSize:22}} onClick={()=>this.copyFunction('0x5425890298aed601595a70AB815c96711a31Bc65')}/> */}
          </h2>
        </div>

        <Card
          bordered={false}
          style={{
            width: '100%',
          }}>
            <div slot="title">
              <Tabs defaultActiveKey="1" items={items} onChange={this.onChange} />
              {/* <h4 className="bgRed">[ This is a Avalanche Chain Testnet block only ]</h4> */}
            </div>
            <div slot="body">
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Block Height:</div>
                  <div className="transactionsDetailGeryItem">
                    <LeftCircleFilled onClick={()=>this.getBlockDetail(Number(this.state.blocksDetail.height)-1)} style={{color: '#3498db',background: 'rgba(52,152,219,.1)',borderColor: 'transparent',cursor:'pointer',}}/>
                    {this.state.blocksDetail.height}
                    <RightCircleFilled onClick={()=>this.getBlockDetail(Number(this.state.blocksDetail.height)+1)} style={{color: '#3498db',background: 'rgba(52,152,219,.1)',borderColor: 'transparent',cursor:'pointer',marginLeft:'10px',}}/>
                  </div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Timestamp:</div>
                  <div className="transactionsDetailGeryItem">
                  {this.state.blocksDetail.timestamp}
                  </div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Transactions:</div>
                  <div className="transactionsDetailGeryItem" style={{display:"flex",flexWrap:'wrap'}}>
                    <span className="bgRed cursorClass" onClick={()=>this.jumpTransaction(this.state.blocksDetail.block_id)}>{this.state.blocksDetail.txs_total} transactions&nbsp;&nbsp;</span>
                    <span>in this block</span>
                  </div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Burned Fees:</div>
                  <div className="transactionsDetailGeryItem">{this.state.blocksDetail.price}</div>
              </div>
              <Divider/>
              {/* <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Difficulty:</div>
                  <div className="transactionsDetailGeryItem"><span className="longChang redSpan">0x16eb1e8c5ec64a333d2764e1ab45a5bd45bca3a6ac98fc29d6f8c0d5e4a89b9a</span><CopyFilled onClick={()=>this.copyFunction('复制的内容')}/></div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Total Difficulty:</div>
                  <div className="transactionsDetailGeryItem">Contract<span className="longChang redSpan">0x16eb1e8c5ec64a333d2764e1ab45a5bd45bca3a6ac98fc29d6f8c0d5e4a89b9a</span><CopyFilled onClick={()=>this.copyFunction('复制的内容')}/></div>
              </div>
              <Divider/>*/}
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Size:</div>
                  <div className="transactionsDetailGeryItem">
                    {this.state.blocksDetail.cost}bytes
                  </div>
              </div>
              <Divider/>
              {/* <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Gas Used:</div>
                  <div className="transactionsDetailGeryItem">0.001382725 AVAX ($0.03)</div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Gas Limit:</div>
                  <div className="transactionsDetailGeryItem">0.000000025 AVAX (25 nAVAX)</div>
              </div>
              <Divider/> */}
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Base Fee Per Gas:</div>
                  <div className="transactionsDetailGeryItem">{this.state.blocksDetail.price}</div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Hash:</div>
                  <div className="transactionsDetailGeryItem">
                    <span className="longChang"  style={{width: '200px'}}>{this.state.blocksDetail.block_id}</span><CopyFilled onClick={()=>this.copyFunction(this.state.blocksDetail.block_id)}/>
                  </div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Parent Hash:</div>
                  <div className="transactionsDetailGeryItem">
                    <span className="longChang redSpan cursorClass" onClick={()=>this.getBlockDetail(this.state.blocksDetail.parent)} style={{width: '200px'}}>{this.state.blocksDetail.parent}</span><CopyFilled onClick={()=>this.copyFunction(this.state.blocksDetail.parent)}/>
                  </div>
              </div>
              <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Sha3Uncles:</div>
                  <div className="transactionsDetailGeryItem">
                  <span className="longChang" style={{width: '200px'}}>{this.state.blocksDetail.access_proof}</span><CopyFilled onClick={()=>this.copyFunction(this.state.blocksDetail.access_proof)}/>
                  </div>
              </div>
              {/* <Divider/>
              <div className="transactionsDetailItemBigBox">
                  <div className="transactionsDetailRedItem"><QuestionCircleOutlined />Nonce:</div>
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
export default withRouter(BlocksDetail) ;