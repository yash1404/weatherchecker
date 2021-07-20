let locationname=document.getElementById("location");
let tempicon=document.getElementById("temperature-icon");
let tempvalue=document.getElementById("temperature");
let climate=document.getElementById("climate")
let iconfile;

const search_input=document.getElementById("search-input");
const searchbtn=document.getElementById("search");

searchbtn.addEventListener("click",(e)=>{
 e.preventDefault();
getweather(search_input.value);
search_input.value="";
});

const getweather=async(city)=>{
try{
  const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6123be95425c3482e2da89f7422362c3`,{mode:'cors'});

  const weatherdata=await response.json();
  console.log(weatherdata);
  const {name}=weatherdata;
  const{feels_like}=weatherdata.main;
  const{id,main}=weatherdata.weather[0];

  
  locationname.textContent=name;
  climate.textContent=main;
  tempvalue.textContent=Math.round(feels_like-283.15);

  if(id>=200 && id<=300){
    tempicon.src="./img/stormcloud.png"
  }
  if(id>=300 && id<=400){
    tempicon.src="./img/drizzle.png"
  }
  if(id>=500 && id<=600){
    tempicon.src="./img/raincloud.png"
  }
  if(id>=600 && id<=700){
    tempicon.src="./img/snow.png"
  }
  if(id>=700){
    tempicon.src="./img/atmmosphere.png"
  }
  if(id==800){
    tempicon.src="./img/clearcloud.png"
  }
  if(id>800){
    tempicon.src="./img/cloudy.png"
  }
}
catch(err){
  alert("City Not Found");
}

};

window.addEventListener("load",()=>{
  let long;
  let lat;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
    long=position.coords.longitude;
    lat=position.coords.latitude;
  
   const proxy=("https://cors-anywhere.herokuapp.com/")
    const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6123be95425c3482e2da89f7422362c3`;

    fetch(api)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data)
      const{name}=data;
      const{feels_like}=data.main;
      const{id,main}=data.weather[0];

      locationname.textContent=name;
      climate.textContent=main;
      tempvalue.textContent=Math.round(feels_like-283.15);
if(id>=200 && id<=300){
  tempicon.src="./img/stormcloud.png"
}
if(id>=300 && id<=400){
  tempicon.src="./img/drizzle.png"
}
if(id>=500 && id<=600){
  tempicon.src="./img/raincloud.png"
}
if(id>=600 && id<=700){
  tempicon.src="./img/snow.png"
}
if(id>=700){
  tempicon.src="./img/atmmosphere.png"
}
if(id==800){
  tempicon.src="./img/clearcloud.png"
}
if(id>800){
  tempicon.src="./img/cloudy.png"
}
 
})
    })
  }
})
