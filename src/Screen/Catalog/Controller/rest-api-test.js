import { response } from "express"

const api_url = 'https://buzz-choiceasy.herokuapp.com/catalogo'
const response = await fetch(api_url);
const json = await response.json();
console.log(json)