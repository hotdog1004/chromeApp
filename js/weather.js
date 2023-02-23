
const API_KEY = '82d70a8be0c87d9de4a173916eacc5cb';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat} , ${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    // fetch 는 promise!
    fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            const weather = document.querySelector('#weather span:first-child')
            const city = document.querySelector('#weather span:last-child')
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        }).catch(()=>{
            // 에러처리
            onGeoError();
        })
}

function onGeoError(){
    alert("Can't find you. No whather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// 날씨 관련 openApi : https://openweathermap.org/api