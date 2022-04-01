import React from 'react';
import styles from './Card.module.css';

function Card(props){
    return (
        <div 
        className={`${styles.card} ${props.className}`}
        >
    {/* This is used to allow <Card /> to be used */}
            {props.children}
        </div>
    );
}

export default Card;