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
                        <button type="button">Send message</button>
                        <button type="button">Log note</button>
                        <button type="button">Activities</button>
                    </div>
                </form>
            </div>

            <style dangerouslySetInnerHTML={{ __html: "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 20px;\n        }\n        .form-group {\n            margin-bottom: 15px;\n        }\n        label {\n            display: block;\n            margin-bottom: 5px;\n        }\n        input, select, textarea {\n            width: 100%;\n            padding: 8px;\n            box-sizing: border-box;\n        }\n        .buttons {\n            margin-top: 20px;\n        }\n        .buttons button {\n            padding: 10px 15px;\n            margin-right: 10px;\n        }\n    " }} />


        </>
    );
}

export default Home3;
