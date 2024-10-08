// import { createStore } from "redux";
// // store creation 
// const initialState = {
//     fullname: "",
//     balance: 0,
//     mobilenumber: null
// };
// //defines the reducer function
// function reducer(state = initialState, action) {
    // switch (action.type) {
    //     case "balance":
    //         return { ...state, balance: state.balance + action.payload };
    //     case "withdraw":
    //         return { ...state, balance: state.balance - action.payload };
    //     case "fullname":
    //         return { ...state, fullname: action.payload };
    //     default:
    //         return state;
    // }
// }
// // store linked to the reducer function
// const store = createStore(reducer);
// // dispatcher created
// store.dispatch({ type: "balance", payload: 1000 });
// console.log(store.getState());
// store.dispatch({ type: "fullname", payload: "sreedhar" });
// console.log(store.getState());
// store.dispatch({type:'withdraw', payload:100})
// console.log(store.getState())
import { createStore } from "redux"

const initialState={
    fullname:"name",
    balance:0,
    mobile:null
}

const store=createStore(reducer)

function reducer(state=initialState,action){
    switch(action.type){
        
        case 'fullname':
            return {...state,fullname:action.payload}
        case 'withdraw':
            return {...state,balance:state.balance- +action.payload}
        case 'deposit':
            return {...state,balance:state.balance+ +action.payload}
        case 'mobile' :
            return {...state,mobile:action.payload}
        case 'reset' :
            return initialState
        default:
            return {...state}
    }
}



export default store

