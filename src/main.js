import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { PokemonService } from './pokemon.js';

$(document).ready(function () {
  $('#findPokemon').click(function () {
    const name = $('#name').val();


    (async () => {
      let pokeService = new PokemonService();
      const response = await pokeService.getPokemonByName(name);
      getElements(response);
    });


    const getElements = function (response) {
      $('.showName').text(`Say hello to ${response.species.name}!`);
      $('.showSprite').html(`<img src=${response.sprites.front_default}></img>`);
      $('.showHeight').text(`${response.species.name} is ${response.height} units tall!`);
      $('.showType').text(`${response.species.name} is ${response.types[0].type.name} type!`);
      $('.showFirstAbility').html(`${response.species.name} knows the move ${response.abilities[0].ability.name}`);
    };
  });
});