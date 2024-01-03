import { createStore } from 'redux';

const reducer=(state ={ value: '' }, action)=>{
    switch(action.type){
        case "SET_VALUE":
            return{...state,value:action.payload };
            default:
            return state;
    }
};
const store=createStore(reducer);

export default store;