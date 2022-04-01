import React, {useState, useRef, useReducer} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';


function AddUser(props){
    const enteredNameRef = useRef();
    const enteredAgeRef = useRef();

    const [error, setError] = useState();

    function addUserHandler(event){
        
        //Allows webpage to not reload
        event.preventDefault(); 

        //Captures Entered Value & Not Every Keystoke
        const capturedName = enteredNameRef.current.value;
        const capturedAge = enteredAgeRef.current.value;

        //Print Nothing if Fields Are Empty
        if(capturedName.trim().length === 0 || capturedAge.trim().length === 0){  
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        
        //Print Nothing if Age is Less Than 1
        if(+capturedAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a Valid Age (positive integers only)'
            });
            return;
        }
        //Passing Compiled Data to onAddUser in App.js
        props.onAddUser(capturedName, capturedAge);

        //SHOULD NEVER RESET ON DOM PRACTICALLY
        //Resets Entered Values to Empty
        enteredNameRef.current.value = '';
        enteredAgeRef.current.value = '';
    };

    function errorHandler(){
        setError(null);
    }

return( 
<div> 
    {error && <ErrorModal 
      title={error.title}
      message={error.message}
      onIgnore={errorHandler} />
    }
    <Card className={styles.input}> 
    <form onSubmit={addUserHandler}>
        
        <label htmlFor="username">Username </label>
        <input 
            id="username" 
            type="text"
            ref={enteredNameRef}/>
            

        <label htmlFor="age"> Age (Years) </label>
        <input 
            id="age" 
            type="number"
            ref={enteredAgeRef}/>
            
        <Button type="submit">Add User</Button>
    </form>
    </Card>
</div>
    );
}

export default AddUser;