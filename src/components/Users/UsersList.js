import React from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

//RENDERS the USERS LIST 
function UsersList(props){
    return(
    <Card className={styles.users}>
        <ul>
            {/* Allows users={} in App.js to work*/}
            {props.users.map(user => 
                <li key={user.id}>
                   {`${user.name} (${user.age} Years Old)`}
                </li>)}
        </ul>
    </Card>
    );
}

export default UsersList;