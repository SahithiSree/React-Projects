// CardComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ image, title, description, link }) => {
  return (
    <div className="col mb-4">
     <Link to={link} className="btn btn-primary" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};
export default CardComponent;



