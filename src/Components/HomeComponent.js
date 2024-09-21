import CardComponent from './CardComponent';
import React from 'react';
import { Link } from 'react-router-dom';
function HomeComponent(){
return(
    <div className="container mt-5">

      <div className="row">
          <CardComponent 
            title="Weather App" 
            description="This Application provides weather information."
            link="/project-a" 
          />
             <CardComponent 
            title="Weather App" 
            description="This Application provides weather information."
            link="/project-a" 
          />
             <CardComponent 
            title="Weather App" 
            description="This Application provides weather information."
            link="/project-a" 
          />
          <CardComponent 
            title="Weather App" 
            description="This Application provides weather information."
            link="/project-a" 
          />
  
          </div>

       
          </div>
)
}
export default HomeComponent;