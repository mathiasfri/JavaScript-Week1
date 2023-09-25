import {url} from "../../settings.js"
import {makeOptions} from "../../utils.js"

export function initAddCar(){
  addCar()
}

async function addCar(){
  const car = {
    brand : "adasd",
    model : "adsadd",
    pricePrDay : 100,
    bestDiscount : 10
  }

  const options = makeOptions("POST", car)

  const newCar = await fetch(url, options)
  .then(res => res.json())
  console.log(newCar)
}