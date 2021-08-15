import "./ExpenseDate.css"

function ExpenseDate(props) {
    let month = props.date.toLocaleString("en-US", { month: "long" });
    let year = props.date.getFullYear();
    let day = props.date.getDate();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;