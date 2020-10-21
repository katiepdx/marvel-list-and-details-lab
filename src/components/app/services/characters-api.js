const getCharacters = async() => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
  
  const json = await res.json();
  return json;
}

const fetchById = async(characterId) => {
  console.log(characterId, 'CHARACTER ID IN API FILE')
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${characterId}`)


  const json = await res.json();
  return json;
}

module.exports = {
  getCharacters,
  fetchById
}