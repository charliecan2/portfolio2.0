import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack href={props.href} download type={props.type}>{props.children}
    <ButtonFront href={props.href} download type={props.type} onClick={props.onClick}>{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button
