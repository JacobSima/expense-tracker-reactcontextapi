import React,{ useContext } from 'react'
import {ExpenseContext} from '../context/GlobalState' 
import Transaction from './Transaction'


const TransationList = () => {

  const expenseContext = useContext(ExpenseContext)
  const {transactions} = expenseContext
  return (
    <>
       <h3>History</h3>
      <ul className="list"> 
        {transactions.map(transaction => <Transaction key = {transaction.id} transaction={transaction}/>)} 
      </ul>
    </>
  )
}

export default TransationList
