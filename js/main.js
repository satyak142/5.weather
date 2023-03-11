
const locationElem = document.querySelector('#location');
const headingElem = document.querySelector('#city');
const iconElem = document.querySelector('#icon');
const tempElem = document.querySelector('#temp');
const weatherElem = document.querySelector('#weather');

document.querySelector('#getWeather').addEventListener('click',get5daysWeather);

function getWeather(){
    
    if(locationElem.value === ''){
        alert('No Input');
        return;
    }
    
    const apikey = '3af4b4ad773af5617d9f81ed2b9e54ab';
    const loc = locationElem.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${apikey}`;
    fetch(url).then(res => res.json())
    .then(data => {
        console.log(data);
        headingElem.innerHTML = data.name;
        tempElem.innerHTML = `Today's temperature is ${data.main.temp}&#176C`;
        weatherElem.textContent = `Weather => ${data.weather[0].main}`;
        iconElem.src = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch( () => (console.log('error')));

    locationElem.value = '';
}

function get5daysWeather(){
    const apikey = '3af4b4ad773af5617d9f81ed2b9e54ab';
    const loc = locationElem.value;
    let coordinates =[] ;
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=${apikey}`
    fetch(url).then(res=>res.json())
    .then(data=>{
        console.log(coordinates = data);
    })
    .catch(error => console.log(error))
    
    console.log(coordinates);
    url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=17.360589&lon=78.4740613&cnt=5&appid=${apikey}`

    fetch(url).then(res => res.json)
    .then(data => {
        console.log(data);
    }).catch(error=> console.log(error))



    locationElem.value = '';
}
