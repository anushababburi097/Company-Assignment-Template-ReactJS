import './index.css'

const Item = props => {
  const {eachDetails} = props
  const {email, name, website} = eachDetails
  return (
    <li className="list-item">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{website}</p>
    </li>
  )
}
export default Item
