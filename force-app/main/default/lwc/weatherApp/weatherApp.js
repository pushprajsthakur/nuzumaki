import { LightningElement, track } from 'lwc';


const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const APPEND_URL =  '&appid=40d9536bb4f7016d095a0d5166335958&units=metric'
export default class WeatherApp extends LightningElement {

    @track query = 'Indore'
    cityWeather =true
    @track errormsg
    description
    connectedCallback(){    
        this.fetchWeatherData()
    }


    icon
    cityname
    sysIs
    des
    tempis
    fetchWeatherData(){
        fetch(WEATHER_URL+this.query+APPEND_URL)
        .then(response=>response.json())
        .then(data=> {
                console.log(data)
                const { main, name, sys, weather } = data
                 this.icon = `https://openweathermap.org/img/wn/${
                    weather[0]["icon"]
                  }@2x.png`
               this.des = weather[0]["description"]
               this.tempis= main.temp
               this.temp_maxis= main.temp_max
               this.temp_minis= main.temp_min
               this.cityname = name
              }
        )
        .catch(error=>{
            console.error(error)
            this.errormsg='Please Enter Vaild City name'                })
    }
   
   
    updateQuery(event) {
        this.query = this.template.querySelector('lightning-input').value;
        this.fetchWeatherData()
    }
}