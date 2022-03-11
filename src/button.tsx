/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './button.css';

interface ButtonProps {
  text: string;
  clickHandler: any;
  icon: string;
  state: string;
  type: string;
}

function Button(props: ButtonProps) {
  function buttonClick() {
    // eslint-disable-next-line no-empty
    if (props.state === 'disabled' || props.state === 'loading') {
    } else {
      props.clickHandler();
    }
  }

  function getButtonClass() {
    let className = '';
    if (props.state === 'disabled') {
      className = 'buttonDisabled';
    } else if (props.state === 'loading' && props.type === 'primary') {
      className = 'buttonLoading buttonLoadingPrimary';
    } else if (props.state === 'loading' && props.type === 'secondary') {
      className = 'buttonLoading buttonLoadingSecondary';
    } else if (props.state === 'loading' && props.type === 'tertiary') {
      className = 'buttonLoading buttonLoadingTertiary';
    } else {
      className = 'buttonDefault';
    }
    return className;
  }

  return (
    <button
      className={`${getButtonClass()} ${props.type}`}
      onClick={buttonClick}
    >
      <span className="buttonText">{props.text}</span>
      <img alt="" src={props.icon} />
    </button>
  );
}

export default Button;
