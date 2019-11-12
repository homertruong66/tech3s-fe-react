import React from 'react';

export default class NotFoundPage extends React.Component {
  
    render() {    
      return (
        <div className="login"> 
            Oops... You are accessing wrong place... <a href="/login">Go back here</a> 
        </div>    
      )
    }
  }