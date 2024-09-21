import React from 'react';

function Home3() {
    return (
        <>
          <div>
    <h1>Expense Report Form</h1>
    <form>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" />
        </div>
        <div className="form-group">
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" />
        </div>
        <div className="form-group">
            <label htmlFor="total-amount">Total Amount</label>
            <input type="number" id="total-amount" name="total-amount" />
        </div>
        <div className="form-group">
            <label htmlFor="included-taxes">Included Taxes</label>
            <input type="number" id="included-taxes" name="included-taxes" />
        </div>
        <div className="form-group">
            <label htmlFor="expense-date">Expense Date</label>
            <input type="date" id="expense-date" name="expense-date" />
        </div>
        <div className="form-group">
            <label htmlFor="employee-name">Employee Name</label>
            <input type="text" id="employee-name" name="employee-name" defaultValue="Tran Quoc Thai" />
        </div>
        <div className="form-group">
            <label>Who will pay the expense?</label>
            <input type="radio" id="employee" name="payer" defaultValue="employee" />
            <label htmlFor="employee">Employee</label>
            <input type="radio" id="company" name="payer" defaultValue="company" />
            <label htmlFor="company">Company</label>
        </div>
        <div className="buttons">
            <button type="button" className="btn">Send message</button>
            <button type="button" className="btn">Log note</button>
            <button type="button" className="btn">Activities</button>
        </div>
    </form>
</div>

<style dangerouslySetInnerHTML={{ __html: `
    body {
        font-family: Arial, sans-serif;
        margin: 20px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
    input, select, textarea {
        width: 100%;
        max-width: 300px; /* Set the maximum width here */
        padding: 8px;
        box-sizing: border-box;
    }
    .buttons {
        margin-top: 20px;
        color:blue;
        
    }
    .buttons button {
        padding: 10px 15px;
        margin-right: 10px;
        
    }

    .buttons {
        margin-top: 20px;
    }
    .btn {
        padding: 10px 15px;
        margin-right: 10px;
        border: none;
        border-radius: 8px; /* Rounded corners */
        background-color: #4CAF50; /* Green background */
        color: white; /* White text */
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow */
        transition: background-color 0.3s ease; /* Smooth transition */
    }
    .btn:hover {
        background-color: #45a049; /* Darker green on hover */
    }
` }} />

        </>
    );
}

export default Home3;

