import React, { Component } from 'react'
import { fetchById } from './services/characters-api'

export default class DetailPage extends Component {
  state = {
    characterDetails: []
  }
  componentDidMount = async () => {
    const characterId = this.props.match.params;
    const characterIdVal = Object.values(characterId)

    // fetch character data by id
    const characterDetails = await fetchById(characterIdVal);

    // update state
    this.setState({ characterDetails })
  }

  render() {
    // deconstruct state 
    const { characterDetails } = this.state;

    return (
      <div>
        <h1>Character Details</h1>
        <h3>This is {characterDetails.name}</h3>
        <img src={characterDetails.image}/>
      </div>
    )
  }
}
