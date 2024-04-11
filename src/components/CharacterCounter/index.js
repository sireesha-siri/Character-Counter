import {Component} from 'react'

import {v4 as uniqueId} from 'uuid'

import CounterItem from '../CounterItem'

import './index.css'

class CharacterCounter extends Component {
  state = {inputValue: '', characterCountList: []}

  userInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  addButton = event => {
    event.preventDefault()

    const {inputValue} = this.state

    const characterCountDetails = {
      id: uniqueId(),
      title: inputValue,
      count: inputValue.length,
    }

    this.setState(prev => ({
      characterCountList: [...prev.characterCountList, characterCountDetails],
      inputValue: '',
    }))
  }

  render() {
    const {inputValue, characterCountList} = this.state

    return (
      <div className="main-container">
        <div className="display-container">
          <div className="display-heading-container">
            <h1 className="display-heading">
              Count the characters like a Boss...
            </h1>
          </div>

          {characterCountList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-user-input-image"
            />
          ) : (
            <ul>
              {characterCountList.map(each => (
                <CounterItem key={each.id} details={each} />
              ))}
            </ul>
          )}
        </div>

        <div className="count-container">
          <h1 className="count-heading">Character Counter</h1>

          <form className="input-container" onSubmit={this.addButton}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.userInputValue}
              value={inputValue}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
