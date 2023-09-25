import {url} from "../../settings.js"

export async function initAllCars(){
  console.log("initAllCars")

  const cars = await getCars()
  
  const listItems = cars.map(car => `
  <li>${car.id} , ${car.brand}</li>
  `).join("")
  document.getElementById("cars").innerHTML = listItems
}

async function getCars(){
  const cars = await fetch(url).then(res => res.json())
  return cars
}