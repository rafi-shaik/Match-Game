import './index.css'

const ThumbnailItem = props => {
  const {details, thumbnailClicked} = props
  const {thumbnailUrl, id} = details

  const buttonClicked = () => {
    thumbnailClicked(id)
  }
  return (
    <li className="thumbnail-item-container">
      <button className="thumbnail-btn" type="button" onClick={buttonClicked}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
