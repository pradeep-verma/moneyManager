import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteHistory} = props
  const {id, titleInput, amountInput, typeInput} = transactionDetails

  const onClickDeleteBtn = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <p className="column-element column-width">{titleInput}</p>
      <p className="column-element column-width">{`Rs ${amountInput}`}</p>
      <p className="column-element column-width">{typeInput}</p>
      <button
        className="delete-btn"
        type="button"
        onClick={onClickDeleteBtn}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
