import React from 'react';
import './layout.css'




function Header(props) {
 
 
 
  return (
    <div className="header">this is my header {props.firstName} {props.children} </div>
  );
}

export default Header;