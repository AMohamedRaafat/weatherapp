import React , {Component} from 'react';
import '../App.css';
class Weather extends Component{
    render(){
        return (
            <div className="result">
              <p>  <span>Temperature :</span> {this.props.temp}         </p>
              <p>  <span>Humidiy     : </span>    {this.props.humidity}     </p>
              <p>  <span>City        :</span> {this.props.city}         </p>
              <p>  <span>Country     :</span>  {this.props.country}      </p>
              <p>  <span>Description : </span> {this.props.des}          </p>
            </div>
        )
    }
}
export default Weather;