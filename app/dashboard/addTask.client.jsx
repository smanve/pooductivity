'use client';
import React, { useState, useEffect } from 'react';


const AddTask = (props) => { 

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredDuration, setDuration] = useState('');

    const titleChangeHandler = (event) => { 
            setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => { 
            setEnteredAmount(event.target.value);
        }
    
    
    const setEnteredDateHandler = (event) => { 
            setEnteredDate(event.target.value);
    }

    const setEnteredDurateionHandler = (event) => { 
        setEnteredDuration(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const task = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveTaskData(task);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setDuration('');
    };

    return (
        <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2030-12-31'
            value={enteredDate}
            onChange={setEnteredDateHandler}
          />
                </div>
                   <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2030-12-31'
            value={enteredDuration}
            onChange={setEnteredDurateionHandler}
          />
        </div>
            </div>
            
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
    );
}

export default AddTask;



