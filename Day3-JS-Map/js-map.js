let clickedCountry;
let originalColor;
document.getElementById("svg2").addEventListener("click", function(e) {

    if (clickedCountry){
        clickedCountry.style.fill = originalColor;
    }
    clickedCountry = e.target;
    originalColor = clickedCountry.style.fill;
    clickedCountry.style.fill = "blue";
    const countryId = e.target.id;
    console.log(countryId)

    fetch("https://countries.plaul.dk/api/countries/" + countryId)
    .then(res => res.json())
    .then(data => {
        document.getElementById("flag").src = data.flag;
        document.getElementById("name").innerText = "Country: " + data.name.common;
        document.getElementById("region").innerText = "Region: " + data.region;

        const languages = Object.entries(data.languages)
            .map(([code, name]) => `${name} (${code})`)
            .join(", ");
        document.getElementById("languages").innerText = "Language(s): " + languages;
        document.getElementById("capital").innerText = "Capital: " + data.capital;
    })
});

