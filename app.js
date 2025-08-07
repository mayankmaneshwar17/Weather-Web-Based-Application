const apiKey = "edfab221f414f0812893cc7309a367b1";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
  
const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


async function getWeatherByLocation(city){
     
         const resp = await fetch(url(city), {
             origin: "cros" });
         const respData = await resp.json();
     
           addWeatherToPage(respData);
          
     }

      function addWeatherToPage(data){
          const temp = Ktoc(data.main.temp);

          const weather = document.createElement('div')
          weather.classList.add('weather');

          weather.innerHTML = `
          <h2><img src="https://imgs.search.brave.com/bXtBxVOZypZlOpRIZZg-vnApQmyos66mG47jhiugyw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVuZm9ydW1zLmNv/bS9nZWVrL2dhcnMv/aW1hZ2VzLzIvdHlw/ZXMvdGh1bWJfd2Vh/dGhlci5wbmc" /> ${temp}°C <img src="https://imgs.search.brave.com/sd5iiFld7QgQmWl6D9ThanyhN8EmQNkXvPJyylkFU6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzI4LzM5LzMz/LzM2MF9GXzkyODM5/MzMzM19MVGVXb2o5/UFRlamFrQ0RlWE4w/WWR0eDNzTnl3aWF4/WC5qcGc" /></h2>
          <small>${data.weather[0].main}</small>
          
          `;

          
        //   cleanup 
          main.innerHTML= "";
           main.appendChild(weather);
      };


     function Ktoc(K){
         return Math.floor(K - 273.15);
     }



     form.addEventListener('submit',(e) =>{
        e.preventDefault();

        const city = search.value;

        if(city){
            getWeatherByLocation(city)
        }

     });

