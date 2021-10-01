import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <Card className='expenses'>
            <ExpensesFilter defaultFilteredYear={filteredYear} onUpdateFilter={filterHandler} />
            <ExpenseItem expense={props.items[0]} />
            <ExpenseItem expense={props.items[1]} />
            <ExpenseItem expense={props.items[2]} />
            <ExpenseItem expense={props.items[3]} />
        </Card>
    );
}

export default Expenses;