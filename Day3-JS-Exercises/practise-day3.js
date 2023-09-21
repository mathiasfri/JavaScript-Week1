const url = "http://localhost:8080/api/cars"

const newCar = {
    brand: "Toyata",
    model: "RAV",
    pricePrDay: 500,
    bestDiscount: 25
  }

const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newCar)
}

fetch(url, options)
.then(res => res.json())
.then(data => console.log(data))