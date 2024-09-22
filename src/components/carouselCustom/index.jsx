import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BootstrapCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/28250738/pexels-photo-28250738/free-photo-of-c-p-doi-om-nhau-tren-c-u.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="First slide"
          style={{ height: '370px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/28250738/pexels-photo-28250738/free-photo-of-c-p-doi-om-nhau-tren-c-u.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Second slide"
          style={{ height: '370px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
