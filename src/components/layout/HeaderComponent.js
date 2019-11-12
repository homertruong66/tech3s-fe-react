import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import logo from '../../logo.jpg';

// stateless PC
export default function HeaderComponent (props) {
    let history = useHistory();
    
    const onLogout = (event) => {        
        props.actions.logout();        
        history.push('/login');
    }

    return (
        <div className="header">
            {/* Logo section */}
            <div id="logo">
                <a href="https://facebook.com/tech3s.mentor/" target="_blank" rel="noopener noreferrer" >
                    <img src={logo} width="66" height="66" alt="Logo" />
                </a>
            </div>
        
            {/* Profile section */}
            <div id="logout">
                <span>Welcome {props.user.email} </span> <button onClick={onLogout}>Logout</button>
            </div>    
        </div>
    );
}

// validate propTypes
HeaderComponent.propTypes = { 
    email: PropTypes.string.isRequired        
};

// set default props
HeaderComponent.defaultProps = {        
    email: 'guest@gmail.com'
};
