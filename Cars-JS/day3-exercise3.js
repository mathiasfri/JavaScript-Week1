let fetchedCarId = 0;

document.addEventListener("DOMContentLoaded", function() {
    const url = "https://cars2-web-app.azurewebsites.net/api/cars";

    const fetchCarsButton = document.getElementById("btn-get-all");
    const carList = document.getElementById("carList");

    fetchCarsButton.addEventListener("click", function() {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                const carListHTML = data.map(car => `
                <tr>
                    <td>${car.id}</td>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.pricePrDay}</td>
                    <td>${car.bestDiscount}</td>
                </tr>
            `).join('');

            carList.innerHTML = carListHTML;
            })
            .catch(e => {
                console.error("Error fetching cars", e);
            })
    })

    const findCarButton = document.getElementById("btn-find-car");

    findCarButton.addEventListener("click", function() {
        const carId = document.getElementById("text-for-id").value;

        fetch(url + "/" + carId)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Car not found: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                document.getElementById("found-car").innerText = JSON.stringify(data, null, 2);
            })
    })

    const addCarButton = document.getElementById("btn-add-car");

    addCarButton.addEventListener("click", function() {
        const form = document.getElementById('carForm');
        const newCar = {
        brand: form.brand.value,
        model: form.model.value,
        pricePrDay: parseFloat(form.pricePrDay.value),
        bestDiscount: parseInt(form.bestDiscount.value),
    };
    const options = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCar)
    }
    fetch(url, options)
    .then(res => {
        if (!res.ok) {
            throw new Error(`Car not added: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        document.getElementById("added-car").innerText = JSON.stringify(data, null, 3);
    })
    })

    
    document.getElementById("find-btn").addEventListener("click", function() {
        const findCarId = document.getElementById("text-for-id2").value;

        fetch(url + "/" + findCarId)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Car not found: ${res.status}`);
                }
                return res.json();
            })
            .then(car => {
                const carForm = document.getElementById("carForm2");
                carForm.brand.value = car.brand;
                carForm.model.value = car.model;
                carForm.pricePrDay.value = car.pricePrDay;
                carForm.bestDiscount.value = car.bestDiscount;

                fetchedCarId = car.id;
            })
            .catch(e => {
                console.error("Error fetching car", e);
            });
    });

    function updateCar(car){
        if (fetchedCarId === null) {
            throw new Error("No car ID provided");
            return;
        }

        return fetch(url + "/" + fetchedCarId, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(car)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Car not updated: ${res.status}`);
            }
            return res.json();
        });
    }

    const carForm = document.getElementById("carForm2");
    carForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const updatedCar = {
            brand: carForm.brand.value,
            model: carForm.model.value,
            pricePrDay: parseFloat(carForm.pricePrDay.value),
            bestDiscount: parseInt(carForm.bestDiscount.value),
        };
        updateCar(updatedCar)
            .then(data => {
                alert("Car updated");
            })
            .catch(e => {
                console.error("Error updating car", e);
            });
    });
})
