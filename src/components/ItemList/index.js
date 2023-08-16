import {Component} from 'react'
import './index.css'
import Item from '../Item'

class ItemList extends Component {
  state = {itemDetails: []}

  componentDidMount() {
    this.getTheData()
  }

  getTheData = async () => {
    const api = 'https://jsonplaceholder.typicode.com/users'
    const option = {
      method: 'GET',
    }
    const response = await fetch(api, option)
    // console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const formattedData = data.map(each => ({
        email: each.email,
        name: each.name,
        website: each.website,
        id: each.id,
      }))
      this.setState({itemDetails: formattedData})
    }
  }

  render() {
    const {itemDetails} = this.state
    return (
      <div>
        <ul className="list-items-details">
          {itemDetails.map(each => (
            <Item eachDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default ItemList
