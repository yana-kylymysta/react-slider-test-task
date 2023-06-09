import React from 'react';
import Button from '../UI/Button/Button.jsx'
import './Feedback.css';

const Feedback = () => {
  return (
    <section className="feedback">
      <h2 className="feedback__title title">Leave your feedback</h2>
      <p className="feedback__text">If you had a chance to work with us, please, leave your feedback and we’ll happily add it to our testimonials page. Thank you!</p>
      <Button value="leave your feedback" />
    </section>
  )
}

export {
    Feedback
} 