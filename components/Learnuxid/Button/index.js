import React from 'react';
import styles from './button.module.css';


const Button = ({primary=true,size,label,children,...props}) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button type='button' className={[styles.button,mode]} {...props}>
            {children}
        </button>
    )
}

export default Button;