import React from 'react';
import{useDispatch} from 'react-redux';

const CompB =()=>{
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        const value=e.target.value;
        dispatch({type: 'SET_VALUE',payload: value});
    };
    return(
        <div>
        <h1>component B</h1>
        <input type="text" onChange={handleChange}placeholder="type something"/>
        </div>
    );
};
export default CompB;