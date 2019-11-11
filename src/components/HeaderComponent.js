import React from 'react';
import PropTypes from 'prop-types';

import logo from '../logo.jpg';

// stateless PC
export default function HeaderComponent (props) {
    
    const onLogin = (event) => {        
        props.actions.login('homertruong66@gmail.com', '123456789');
    }

    const onLogout = (event) => {        
        props.actions.logout();
    }

    // render() {
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
                    <span>Welcome {props.user.email != null ? props.user.email : 'Guest'}</span>  
                    {
                        props.user.authenticated ? (
                            <button onClick={onLogout}>Logout</button>
                        ) : (
                            <button onClick={onLogin}>Login</button>
                        )
                    }                                      
                </div>
            </div>
        );
    // }
}

// validate propTypes
HeaderComponent.propTypes = { 
    email: PropTypes.string.isRequired        
};

// set default props
HeaderComponent.defaultProps = {        
    email: 'Guest'
};

