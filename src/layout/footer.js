import React from 'react';


function footer(props) {
  let fistname = 'ract'
  console.log(fistname)
  return (
    <div className="footer">this is my footer- {props.firstName}</div>
  );
}

export default footer;