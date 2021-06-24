import './App.css';
import React , {Component} from 'react';
import Form from './component/Form';
import Weather from './component/Weather';
const API_KEY = "58e9e22e97b63601e7fd96b4376b43a4";
class App extends Component{
  state = { 
    temp        : '',
    humidity    : '',
    city        : '',
    country     : '',
    description : '',
    error       : ''
  }
  getData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const Api =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await Api.json();
    console.log(data)
    if(city && country){
      this.setState({
        temp        : data.main.temp,
        humidity    : data.main.humidity,
        city        : data.name,
        country     : data.sys.country,
        description : data.weather[0].description,
        error       : ''
      })
    }else{ this.setState({
        temp        : ''  ,
        humidity    : '',
        name        : '',
        country     : '',
        description : '',
        error       : 'Erorr Data..'
    })}
  }

  render(){
    return(
      <div className="App">
        <h1>Weather App</h1>
        <Form getData={this.getData}/>
        <Weather temp = {this.state.temp} humidity = {this.state.humidity} city = {this.state.city} country = {this.state.country}
        des = {this.state.description}
        />
      </div>
    )
  }
}


export default App;
