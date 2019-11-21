import React from 'react';

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
          {this.props.searchResult.list.map(function(item, index) { 
            return (
              <p key={index}>{index+1}) {item.user.email} - {item.first_name} {item.last_name} ->  
                 <button onClick={() => me.onUpdate(item.id)}>Update</button> 
                 <button onClick={() => me.onDelete(item.id)}>Delete</button></p>
            );
          })} 
      </div>    
    )
  }
}