import React from 'react';

const Footer = () => {
    // Footer Style CSS
    const footerStyle = {
        background: '#000',
        color: '#fff',
        padding: '15px 0',
        margin: '25px 0 0'
    }
    return (
        <div>
            <footer style={footerStyle}> <small>&copy; Copyright 2021, Programming Hero</small> </footer> 
        </div>
    );
};

export default Footer;