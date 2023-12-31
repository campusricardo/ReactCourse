import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";
import React from "react";

const ExpenseItem = ({ date, title, amount }) => {
	// no nested functions
	console.log("ExpenseItem evaluated by React");


	// show  end with Handler

	return (
		<li><Card className="expense-item">
			<ExpenseDate date={date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
		</Card>
		</li>
	);
};
export default ExpenseItem;
