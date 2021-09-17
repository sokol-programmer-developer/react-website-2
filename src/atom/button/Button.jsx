import React from 'react';
import './Button.css';

const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {

    const STYLES = ['btn--primary', 'btn--outline'];
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const COLOR = ['primary', 'blue', 'red', 'green'];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
