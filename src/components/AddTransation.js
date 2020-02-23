import React,{useState,useContext}from 'react'
import {ExpenseContext} from '../context/GlobalState'
import uuid from 'uuid'

const AddTransation = () => {

  const expenseContext = useContext(ExpenseContext)
  const {addTransaction} = expenseContext

  const [text,setText] = useState('')
  const [amount,setAmount] = useState(0)
  
  const onSubmit = e => {
    e.preventDefault()

    if(text === '' || amount === 0) return alert('Please Enter correct text and correct amount')
    
    const newExpense = {text,amount: Number(amount),id:uuid.v4()}
    addTransaction(newExpense)

    //clear the field
    setText('')
    setAmount('')
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" 
                 placeholder="Enter text..." 
                 value={text}
                 onChange = {e => setText(e.target.value)}
                 />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" 
                 placeholder="Enter amount..." 
                 value={amount}
                 onChange = {e => setAmount(e.target.value)}
                 />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransation
