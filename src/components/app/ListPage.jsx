import React, { Component } from 'react'
import { getCharacters } from './services/characters-api'

export default class ListPage extends Component {
  state = {
    allCharacterInfo: [],
    allNames: []
  }
  
  async componentDidMount() {
    // fetch character data on mount 
    const characters = await getCharacters();

    // map character details and grab the names
    const characterNames = characters.map(character => { 
      return character.name;
    })
  
    // set characterDetails and characterNames to state
    this.setState({
      allCharacterInfo: characters, 
      allNames: characterNames 
    })

    //Check data is in state
    console.log('NAMES IN STATE', this.state.allNames)
    console.log('DETAILS IN STATE', this.state.allCharacterInfo)
  }

   render() {
    //  deconstruct state
    const { allCharacterInfo, allNames } = this.state;

    // mapped characters 
    const mappedNames = allCharacterInfo.map(character => (
      <div>
        <li key={character._id}>
          <a href={character.image}>{character.name}</a>
        </li>
      </div>
    ))

    return (
      <>
        <h1>All Characters</h1>
        <section>
          Hey Arnold Characters!
          <ul>{mappedNames}</ul>
        </section>
      </>
    )
  }
}
