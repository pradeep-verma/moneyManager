import './index.css'

const MoneyDetails = props => {
  const {historyList} = props
  let balance = 0
  let income = 0
  let expenses = 0

  historyList.forEach(eachObj => {
    if (eachObj.typeInput === 'INCOME') {
      income += parseInt(eachObj.amountInput)
    } else {
      expenses += parseInt(eachObj.amountInput)
    }
  })
  balance = income - expenses

  return (
    <div className="money-details-container">
      <div className="card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="card-icon"
        />
        <div className="card-text">
          <p className="text">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            {`Rs ${balance}`}
          </p>
        </div>
      </div>
      <div className="card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="card-icon"
        />
        <div>
          <p className="text">Your Income</p>
          <p className="amount" testid="incomeAmount">
            {`Rs ${income}`}
          </p>
        </div>
      </div>
      <div className="card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="card-icon"
        />
        <div className="card-text">
          <p className="text">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            {`Rs ${expenses}`}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
