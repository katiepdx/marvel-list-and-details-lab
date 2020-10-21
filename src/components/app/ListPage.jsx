import React, { Component } from 'react'
import { getCharacters } from './services/characters-api'
import { Link } from 'react-router-dom'

export default class ListPage extends Component {
  state = {
    allCharacterInfo: []
  }
  
  async componentDidMount() {
    // fetch character data on mount 
    const characters = await getCharacters();
  
    // set characterDetails to state
    this.setState({
      allCharacterInfo: characters
    })
  }

   render() {
    //  deconstruct state
    const { allCharacterInfo } = this.state;

    // mapped character names with Links
    const mappedNames = allCharacterInfo.map(character => (
      // make each character a link
      <Link key={character._id} to={`/DetailPage/${character._id}`}>
        <li key={character._id}>{character.name}</li>
      </Link>
    ))

    return (
      <>
        <h1>All Characters</h1>
        Hey Arnold Characters!
        <ul>{mappedNames}</ul>
      </>
    )
  }
}
