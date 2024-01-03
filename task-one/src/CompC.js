import React from 'react';
import{useDispatch, useSelector} from 'react-redux';

const CompC=()=>{
    const value=useSelector((state)=> state.value);

    return(
        <div>
            <h1>Component c</h1>
            <p>value from redux store: {value}</p>
        </div>    
        );
};

export default CompC;