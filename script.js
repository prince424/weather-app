let box = document.getElementById('box');
let city = document.getElementById('city');
const inputbox = document.getElementById('inputbox');
let btn = document.getElementById('btn');
let type1 = document.getElementById('type1');
let type2 = document.getElementById('type2');
let type3 = document.getElementById('type3');
let type4 = document.getElementById('type4');
let type5 = document.getElementById('type5');
let temp = document.getElementById('temp');
let humid = document.getElementById('humid');
let wind = document.getElementById('wind');
let feel = document.getElementById('feel');
let vel = document.getElementById('vel');
let pressure = document.getElementById('pressure');
let uvindex = document.getElementById('pressure');



// let cityName = inputbox.value

let xhr = new XMLHttpRequest();

btn.addEventListener('click', function () {
    xhr.open('GET', `https://api.weatherapi.com/v1/current.json?key=b11159d12468496c8ee134925242409&q=${inputbox.value}&aqi=no`);

    xhr.onload = function () {
        console.log(xhr);

        let rawData = xhr.responseText;
        console.log(rawData);

        let newData = JSON.parse(rawData);

        console.log(newData);

        temp.innerHTML = newData.current.temp_c + '°C';
        humid.innerHTML = newData.current.humidity;
        wind.innerHTML = newData.current.wind_kph;
        feel.innerHTML = newData.current.feelslike_c;
        vel.innerHTML = newData.current.vis_km;
        pressure.innerHTML = newData.current.pressure_mb;
        uvindex.innerHTML = newData.current.uv;
        
    }

   xhr.send();
});