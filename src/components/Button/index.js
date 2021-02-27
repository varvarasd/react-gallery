import React from 'react';
import './button.scss';

const Button = ({role, addClass, labelName, action, children}) => {
    const buttonClasses = addClass ? `button ${addClass}` : 'button';
    return <button 
        role={role}
        label={labelName}
        onClick={action} 
        className={buttonClasses}>
            {children}
        </button>;
};

export default Button;