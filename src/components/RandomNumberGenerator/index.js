// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNumber = () => {
    this.setState(prevState => {
      console.log(`${prevState.count}`)
      return {count: Math.ceil(Math.random() * 100)}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="container2">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.randomNumber}>
            Generate
          </button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
