export class PokemonService {
  async getPokemonByName(name) {
    try {
      console.log("Trying")
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}