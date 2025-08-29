import React,{useState} from 'react';
import validator from 'validator';
const App=()=>{
    const [errorMessage,setErrorMessage]=useState('');
    const Validate=(value)=>{
        if(validator.isStrongPassword(value,{
            minLength:8,
            minLowercase:1,
            minUppercase:1,
            minNumbers:1,
            minsymbol:1
        }))
    {
        setErrorMessage('Is strong Password');
    }
    else{
        setErrorMessage('Is not strong Password');
    }

    }
    return (
        <div style={{
            marginLeft:'200px',
        }}>
            <h2>Checkimg Password Strength in ReactJS</h2>
            <span>Enter Password:</span><input type="text" onChange={(e)=>ValidityState(e.target.value)}></input><br/>

            {errorMessage ==='' ? null :
            <span style={{fontWeight:'bold',color:'red',}}>{errorMessage}</span>}

        </div>
    )
}
export default App