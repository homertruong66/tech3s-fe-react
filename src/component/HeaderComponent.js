import React from 'react';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                {/* Logo section */}
                <div id="logo">
                    <a href="https://facebook.com/tech3s.mentor/" target="_blank" rel="noopener noreferrer" >
                        <img src="img/logo.jpg" width="66" height="66" alt="Logo" />
                    </a>
                </div>
            
                {/* Profile section */}
                <div id="logout">
                    <span>Welcome </span> <span id="loggedUser"></span>
                    <button>Logout</button>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;