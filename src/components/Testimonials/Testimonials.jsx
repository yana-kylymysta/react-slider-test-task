import React from 'react';
import { Carousel } from '../index.js';
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h4 className="testimonials__subtitle">Testimonials</h4>
      <h2 className="testimonials__title title">What our clients say about us</h2>
      <Carousel />
    </section>
  )
}

export {
  Testimonials
}