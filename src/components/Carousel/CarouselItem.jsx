import React from 'react';
import './Carousel.css'

const CarouselItem = ({item: {text, name, position, company, img}}) => {
    let htmlText = {__html: text};
  return (
    <article className="carousel__item">
        <div className="carousel__block">
            <div className="carousel__testimonial" dangerouslySetInnerHTML={htmlText}>               
            </div>
            <div className="carousel__name">{name}</div>
            <div className="carousel__company">{position}, <span>{company}</span></div>
        </div>
        <div className="carousel__img">
            <img src={img} alt={name} />
        </div>
    </article>
  )
}

export default CarouselItem