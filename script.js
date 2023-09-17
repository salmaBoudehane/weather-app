
const apiKey="13bcd4673499529f12c081953c2ffcb0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const inputBox=document.querySelector(".enter input");
const buttonSearch=document.querySelector(".enter button");
const image=document.querySelector(".info img");

async function getData(city){
    const response=await fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`);
    if(response.status === 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await response.json();

        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".h").innerHTML = data.main.humidity + "%";
        document.querySelector(".w").innerHTML = data.wind.speed + " km / h";
    
        if(data.weather[0].main === "Rain"){
            image.src="images/rain.png";
        }
        else if(data.weather[0].main === "Snow"){
            image.src="images/snow.png";
        }
        else if(data.weather[0].main === "Clear"){
            image.src="images/clear.png";
        }
        else if(data.weather[0].main === "Clouds"){
            image.src="images/clouds.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            image.src="images/drizzle.png";
        }
        else if(data.weather[0].main === "Mist"){
            image.src="images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    
};

buttonSearch.addEventListener("click",()=>{
    if(inputBox.value === ''){
        alert("Please enter city name!!!");
    }
    else{
        getData(inputBox.value);
    }
})



