import React from 'react';

/**
 * Input props: 'pageIndex', 'numOfPages', 'pageSize', 'actions' (handlePagingInfoChange)
 */
export default class PagingBarComponent extends React.Component {
  
  onPageIndexChange = (event) => {
    event.persist();  // remove synthetic event 
    let pageIndex = parseInt(event.target.value);
    if  (isNaN(pageIndex)) {
      pageIndex = 1;
    }
   
    this.props.handlePagingInfoChange(pageIndex, this.props.pageSize);
  }

  onPageSizeChange = (event) => {
    event.persist();  // remove synthetic event 
    let pageSize = parseInt(event.target.value);
    if  (isNaN(pageSize)) {
      pageSize = 10;
    }

    this.props.handlePagingInfoChange(this.props.pageIndex, pageSize);
  }    

  onFirst = (event) => {
    if (this.props.pageIndex > 1) {
      this.props.handlePagingInfoChange(1, this.props.pageSize);
    }
  }

  onPrevious = (event) => {
    if (this.props.pageIndex > 1) {
      this.props.handlePagingInfoChange(this.props.pageIndex - 1, this.props.pageSize);
    }
  }

  onNext = (event) => {
    if (this.props.pageIndex < this.props.numOfPages) {
      this.props.handlePagingInfoChange(this.props.pageIndex + 1, this.props.pageSize);
    }
  }

  onLast = (event) => {
    if (this.props.pageIndex < this.props.numOfPages) {
      this.props.handlePagingInfoChange(this.props.numOfPages, this.props.pageSize);
    }
  }
  
  render() {    
    return (
      <div className="paging-bar"> 
        <button onClick={this.onFirst}>First</button>
        <button onClick={this.onPrevious}>Previous</button>
        <span>Current Page: </span> <input value={this.props.pageIndex} onChange={this.onPageIndexChange} /> 
                                  / <span>{this.props.numOfPages}</span> -  
        <span>Page Size: </span>
        <select value={this.props.pageSize} onChange={this.onPageSizeChange}>
          <option>2</option>
          <option>4</option>
          <option>6</option>
          <option>8</option>
          <option>10</option>
          <option>20</option>
        </select>
        <button onClick={this.onNext}>Next</button>
        <button onClick={this.onLast}>Last</button>
        <br/><br/>          
      </div>    
    )
  }
}