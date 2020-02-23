import React,{useContext} from 'react'
import {ExpenseContext} from '../context/GlobalState'
import PropTypes from 'prop-types';

const Transaction = ({transaction}) => { 
  const expenseContext = useContext(ExpenseContext)
  const {deleteTransaction} = expenseContext

  const {text,amount,id} = transaction
  const sign = amount < 0 ? '-':'+'
  const border = amount > 0? 'plus':'minus'
  return (
    <div>
      <li className={border}>
          {text} <span>{sign}${Math.abs(amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(id)}>x</button>
        </li>
    </div>
  )
}

Transaction.propTypes ={
  transaction:PropTypes.object.isRequired,
}

export default Transaction
