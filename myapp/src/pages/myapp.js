import React from 'react'
import { connect } from 'dva'
import {  Table, Pagination } from 'antd'

const mapStateToProps = ({ myapp }) => {
  const { list, pageNum, pageCount, total } = myapp
  return{
    list,
    pageNum, 
    pageCount, 
    total, 
  }
}

@connect(mapStateToProps)
class Myapp extends React.Component{
  
  componentDidMount(){
  }

  constructor(props){
    super(props)
    this.changeList(1,3)
  }

  changeList = (pageNum,pageCount) =>{
    const { dispatch } = this.props
    dispatch({
      type:'myapp/fetch',
      payload:{
        pageNum,
        pageCount,
      },
    })
  }

  onShowSizeChange = (current,pageCount) => {
    this.changeList(1, pageCount)
  }

  pageChange = (current) => {
    const { pageCount } = this.props
    this.changeList(current, pageCount)
  }

  getColumns = () => {
    return[
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        
      },
    ]
  }

  render(){
    const { pageNum, pageCount, total } = this.props
    return(
      <div>
        <div>
          <Table columns={this.getColumns()} dataSource={this.props.list} pagination={false} />
        </div>
        <div>
          <Pagination
            showSizeChanger 
            onChange={this.pageChange}
            onShowSizeChange={this.onShowSizeChange}
            pageSizeOptions = {['3','5','10']}
            defaultCurrent={pageNum}
            pageSize={pageCount}
            total={total}
            size="small"
          />
        </div>
      </div>
    )
  }
}

export default Myapp
