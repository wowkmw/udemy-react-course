import "./ExpenseItem.css"

function ExpenseItem(props) {
    let expenseDate = props.expense.date;
    let month = expenseDate.toLocaleString("en-US", { month: "long" });
    let expenseTitle = props.expense.title;
    let expenseAmount = props.expense.amount;
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{expenseDate.getFullYear()}</div>
                <div>{expenseDate.getDate()}</div>
            </div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;