import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  changeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAccountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  changeTypeInput = event => {
    this.setState({typeInput: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    if (titleInput !== '' && amountInput !== '') {
      const newTransaction = {
        id: uuidv4(),
        titleInput,
        amountInput,
        typeInput,
      }
      this.setState(prevState => ({
        historyList: [...prevState.historyList, newTransaction],
        titleInput: '',
        amountInput: '',
        typeInput: transactionTypeOptions[0].optionId,
      }))
    }
  }

  deleteHistory = id => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(
        eachHistory => eachHistory.id !== id,
      ),
    }))
  }

  render() {
    const {titleInput, amountInput, typeInput, historyList} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="profile-container">
            <h1 className="name">Hi, Richard</h1>
            <p className="welcome-text">
              Welcome back to your{' '}
              <span className="money-manager-text">Money Manager</span>
            </p>
          </div>
          <MoneyDetails historyList={historyList} />
          <div className="form-history-container">
            <form className="transaction-form" onSubmit={this.addTransaction}>
              <h1 className="form-title">Add Transaction</h1>
              <div className="input-container">
                <label className="label-element" htmlFor="title">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="input-element"
                  value={titleInput}
                  onChange={this.changeTitleInput}
                  placeholder="TITLE"
                />
              </div>
              <div className="input-container">
                <label className="label-element" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  className="input-element"
                  value={amountInput}
                  onChange={this.changeAccountInput}
                  placeholder="AMOUNT"
                />
              </div>
              <div className="input-container">
                <label className="label-element" htmlFor="type">
                  TYPE
                </label>
                <select
                  id="type"
                  className="input-element"
                  value={typeInput}
                  onChange={this.changeTypeInput}
                >
                  <option value={transactionTypeOptions[0].optionId}>
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option value={transactionTypeOptions[1].optionId}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
            <div className="transaction-history">
              <h1 className="history-title">History</h1>
              <ul className="history-list-container">
                <li className="history-item-title">
                  <p className="column-heading column-elements">Title</p>
                  <p className="column-heading column-elements">Amount</p>
                  <p className="column-heading column-elements">Type</p>
                </li>
                {historyList.map(eachHistory => (
                  <TransactionItem
                    transactionDetails={eachHistory}
                    key={eachHistory.id}
                    deleteHistory={this.deleteHistory}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
