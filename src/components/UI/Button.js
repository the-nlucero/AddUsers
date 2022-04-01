import React from 'react';
import styles from './Button.module.css';


//This Function Builds The Stlying for the Submit Button
function Button(props){
    return (
        <button 
           className={styles.button} 
           type={props.type || 'button'} 
           onClick={props.onClick}
        >
            {/* This is used to allow <Button /> to be compiled */}
        {props.children}
        </button>
    );
}

export default Button;