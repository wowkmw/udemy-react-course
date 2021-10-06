import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredItems = props.items.filter(
        expense => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className='expenses'>
            <ExpensesFilter defaultFilteredYear={filteredYear} onUpdateFilter={filterHandler} />
            <ExpenseList items={filteredItems} />
        </Card>
    );
}

export default Expenses;