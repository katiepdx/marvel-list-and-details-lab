import React, { Component } from 'react'
import { getCharacters } from './services/characters-api'

export default class DetailPage extends Component {
  render() {
    const query = new URLSearchParams(this.props.location.search)
    return (
      <div>
        Detail Page {query}
      </div>
    )
  }
}
