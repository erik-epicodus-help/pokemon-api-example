import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#findPokemon').click(function () {
    const name = $('#name').val();

    let request = new XMLHttpRequest();

    const url = `https://pokeapi.co/api/v2/pokemon/${name}` // takes a number or a lower case name, which is defined in the API's documentation

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements() // Called here because the request is an async task, so we need to wait for the request to complete before we update our DOM (otherwise we won't have anything to update the DOM with)
      }
    }

    request.open("GET", url, true);
    request.send();



    const getElements = function (response) {
      $('.showName').text(`Say hello to ${response.species.name}!`);
      $('.showSprite').html(`<img src=${response.sprites.front_default}></img>`);
      $('.showHeight').text(`${response.species.name} is ${response.height} units tall!`);
      $('.showType').text(`${response.species.name} is ${response.types[0].type.name} type!`);
      $('.showFirstAbility').html(`${response.species.name} knows the move ${response.abilities[0].ability.name}`);
    }
  });
});