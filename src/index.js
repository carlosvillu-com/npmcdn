import axios from 'axios'

export default class CVPokeapi {

  static get ROOT(){return "http://pokeapi.co/api/v1/"}

  constructor () {
    this._fetcher = axios
  }

  pokemon({id} = {}){
    return this._fetcher.get(`${CVPokeapi.ROOT}pokemon/${id}`).then(response => response.data);
  }
}
