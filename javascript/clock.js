function updateTime(){
let AccraElement = document.querySelector("#accra")
let AccraDateElement = AccraElement.querySelector(".date")
let AccraTimeElement = AccraElement.querySelector(".time")
let AccraTime = moment().tz("Africa/Accra")

AccraDateElement.innerHTML = AccraTime.format("MMMM Do YYYY")
AccraTimeElement.innerHTML = AccraTime.format("h:mm:ss [<small>]A[</small>]")

let losAngelesElement = document.querySelector("#los-angeles")
let losAngelesDateElement = losAngelesElement.querySelector(".date")
let losAngelesTimeElement = losAngelesElement.querySelector(".time")
let losAngelesTime = moment().tz("America/Los_Angeles")

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY")
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]")
}
updateTime()
setInterval(updateTime,1000)