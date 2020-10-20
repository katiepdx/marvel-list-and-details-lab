import React, { Component } from 'react'
import { getCharacters } from './services/characters-api'

export default class ListPage extends Component {
  async render() {
    // api call - get all names
    const characters = await getCharacters();
    console.log(characters)
    
    return (
      <>
        <h1>All Characters</h1>
      </>
    )
  }
}
