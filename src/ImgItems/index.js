import './index.css'

const ImgItems = props => {
  const {value, clicking} = props
  const {thumbnailUrl, id} = value
  const clicked = () => {
    clicking(id)
  }

  return (
    <li className="li">
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="thumb-img"
        onClick={clicked}
      />
    </li>
  )
}

export default ImgItems
