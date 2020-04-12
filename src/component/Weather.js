import React from 'react';


const Weather = (props) => {
    return(
        <div className="info">
           {
              props.temperature &&
              <p className="info_key"> 
              <span className="info_value">Temperature : {props.temperature}</span>
              </p>
          }
          {
              props.city &&
              <p className="info_key">
              <span className="info_value">City : {props.city}</span> 
              </p>
          }
          {
              props.country && 
              <p className="info_key">
              <span className="info_value">Country : {props.country}</span>   
                  </p>
          }
          {
              props.humidity && 
              <p className="info_key" >
              <span className="info_value">Humidity : {props.humidity}</span>
              </p>
          }
          {
              props.description &&
              <p className="info_key">
              <span className="info_value">Description : {props.description}</span>
              </p>
          }
           {
              props.error &&
              <p className="info_key">
              <span className="info_value">Error : {props.error}</span>
              </p>
          }
        </div>
    );
}

export default Weather ;
//
/*   */