import React from 'react';
import LoginButton from '../commonComponents/loginComponent'


function content(props) {

  return (
    <div>this is my content- from props {props.username}
    <LoginButton buttonName={props.username}></LoginButton>
    </div>
  );
}

export default content;