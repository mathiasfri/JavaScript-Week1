import { url } from "../../settings.js"

export function initFindCar(){
  document.getElementById("result").innerText = ""
  document.getElementById("btn").addEventListener("click", findCar)
}

async function findCar(){
  document.getElementById("error").innerText = ""
  const id = document.getElementById("car-id").value

  try {
    const car = await fetch(url + "/" + id)
    .then(res => {
      if(!res.ok){
        throw new Error(`Car not found: ${res.status}`)
      }
      return res.json()
    })
    document.getElementById("result").innerText = JSON.stringify(car, null, 3)
  } catch (e) {
    document.getElementById("error").innerText = e.name + ": " + e.message
  }
}