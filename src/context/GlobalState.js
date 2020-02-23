import React,{ createContext ,useReducer} from 'react'

export const ExpenseContext =  createContext()

const GlobalState = props =>{
  
  const initialState = {
    transactions: [
      {id:1,text:'Flower',amount:-20},
      {id:2,text:'Salary',amount:300},
      {id:3,text:'Book',amount:-10},
      {id:4,text:'Camera',amount:150}
    ]
  }

  const [state,dispatch] = useReducer(globalReducer,initialState)

  //actions will go here

  const addTransaction = trans => dispatch({type:'ADD_TRANS',payload:trans})

  const deleteTransaction = id => dispatch({type:'DELETE_TRANS',payload:id})

  return <ExpenseContext.Provider 
     value ={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
     }}>
     {props.children}
  </ExpenseContext.Provider>
}


const globalReducer = (state,actions)=>{
  switch(actions.type){

    case 'ADD_TRANS':
      return {
        ...state,
        transactions : [actions.payload,...state.transactions]
      }
   
    case 'DELETE_TRANS':
      return {
        ...state,
        transactions: state.transactions.filter(trans => trans.id !== actions.payload)
      }

    default:
      return state
  }
}



export default GlobalState