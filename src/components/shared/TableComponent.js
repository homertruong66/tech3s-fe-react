import React from 'react';

/**
 * Input props: 'list', 'formatRowItem', 'actions' (getRequest & deleteRequest)
 */
export default class TableComponent extends React.Component {
  
  onUpdate = (id) => {
    this.props.actions.getRequest(id);
  }
  
  onDelete = (id) => {
    this.props.actions.deleteRequest(id);
  }
  
  render() {    
    const me = this;
    return (
      <div className="table"> 
          {this.props.list.map(function(item, index) { 
            return (
              <p key={index}>{index+1}) {me.props.formatRowItem(item)} ->  
                 <button onClick={() => me.onUpdate(item.id)}>Update</button> 
                 <button onClick={() => me.onDelete(item.id)}>Delete</button>
              </p>
            );
          })} 
      </div>    
    )
  }
}