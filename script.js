var btnsearch=document.querySelector('#btnsearch')
btnsearch. addEventListener('click',function(){
   var city=document.querySelector('#city')
   var apiURL="https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=28f06817b2abd2c8356608651acc3f53"
   console.log(apiURL)
   var cityname=document.querySelector('#cityname')
   cityname.textContent=city.value
   getData(apiURL)
})

async function getData(apiURL){
    var raw = await fetch(apiURL)
    var data = await raw.json()
    console.log(data)
    var tempt=document.querySelector('#tempt')
    tempt.textContent=(data.main.temp-273.15).toFixed(2)+"°C"
    var hdt = document.querySelector('#hdt')
    hdt.textContent=(data.main.humidity).toFixed(1)+"%"
    var speed= document.querySelector('#speed')
    speed.textContent=data.wind.speed+"km/hr"
}