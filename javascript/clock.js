function updateTime(){
    let AccraElement = document.querySelector("#accra")
    if (AccraElement){
let AccraDateElement = AccraElement.querySelector(".date")
let AccraTimeElement = AccraElement.querySelector(".time")
let AccraTime = moment().tz("Africa/Accra")

AccraDateElement.innerHTML = AccraTime.format("MMMM Do YYYY")
AccraTimeElement.innerHTML = AccraTime.format("h:mm:ss [<small>]A[</small>]")
}
    let losAngelesElement = document.querySelector("#los-angeles")
    if(losAngelesElement){
let losAngelesDateElement = losAngelesElement.querySelector(".date")
let losAngelesTimeElement = losAngelesElement.querySelector(".time")
let losAngelesTime = moment().tz("America/Los_Angeles")

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY")
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]")
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess()
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1]
    let cityTime = moment().tz(cityTimeZone)
    let citiesElement = document.querySelector("#cities")
    console.log("City Name:", cityName); 

    citiesElement.innerHTML = `
    <div class="cities" >
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss ")} <small>${cityTime.format("A")}</small></div>

        </div>
        <div>
        <a href="/">all cities</a>

        </div>`
    
}
updateTime()
setInterval(updateTime, 1000)


document.querySelector("#city").addEventListener("change", updateCity)
