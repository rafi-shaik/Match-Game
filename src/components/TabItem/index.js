import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {tabId, displayText} = tabDetails

  const activeButtonClass = isActive ? 'tab-btn active-btn' : 'tab-btn'

  const buttonFunction = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={activeButtonClass}
        onClick={buttonFunction}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
