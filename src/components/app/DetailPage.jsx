import React, { Component } from 'react'
import { getCharacters } from './services/characters-api'

export default class DetailPage extends Component {
  componentDidMount = async () => {
    const characterId = this.props.match.params;
    console.log(characterId)
  }

  render() {
    return (
      <div>
        Detail Page
      </div>
    )
  }
}
