import React, {useState} from 'react';
import CarouselItem from './CarouselItem.jsx';
import { ReactComponent as PrevArrow } from '../../assets/prev-arrow.svg';
import { ReactComponent as NextArrow } from '../../assets/next-arrow.svg';
import './Carousel.css'

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {   id: 1,
            name: "Wolfgang Männel",
            position: "Founder and Managing Director",
            company: "Fotografen365",
            img: require('../../assets/client1.jpg'),
            text: "<p>I have worked with a number of software developers before but none of them quite reached the level of professionalism, diligence and enthusiasm that I experienced with Vitaliy and his team. They are incredibly easy to work with and almost always find great programming solutions to our requirements.</p><p>What I especially liked about the SoftFormance team is their passion and understanding for our project. It’s like working with friends. Friends that deliver on their promises. I have nothing but praise for the work of SoftFormance team and look forward to working with this agency in the future.</p>",
        },
        {   id: 2,
            name: "Wolfgang Männel",
            position: "Founder and Managing Director",
            company: "Fotografen365",
            img: require('../../assets/client1.jpg'),
            text: "<p>2 I have worked with a number of software developers before but none of them quite reached the level of professionalism, diligence and enthusiasm that I experienced with Vitaliy and his team. They are incredibly easy to work with and almost always find great programming solutions to our requirements.</p><p>What I especially liked about the SoftFormance team is their passion and understanding for our project. It’s like working with friends. Friends that deliver on their promises. I have nothing but praise for the work of SoftFormance team and look forward to working with this agency in the future.</p>",
        },
        {   id: 3,
            name: "Wolfgang Männel",
            position: "Founder and Managing Director",
            company: "Fotografen365",
            img: require('../../assets/client1.jpg'),
            text: "<p>3 I have worked with a number of software developers before but none of them quite reached the level of professionalism, diligence and enthusiasm that I experienced with Vitaliy and his team. They are incredibly easy to work with and almost always find great programming solutions to our requirements.</p><p>What I especially liked about the SoftFormance team is their passion and understanding for our project. It’s like working with friends. Friends that deliver on their promises. I have nothing but praise for the work of SoftFormance team and look forward to working with this agency in the future.</p>",
        },
    ]

const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    console.log(newIndex)
    setActiveIndex(newIndex);
};

  return (
    <section className='carousel'>
        <div className="carousel__inner" style={{ transform: `translate(-${activeIndex * 100}%)`}}>
            {items.map(item => {
                return <CarouselItem item={item}  key={item.id}/>
            })}
        </div>
        
        <div className="carousel__buttons">
            <button
            className={`carousel__button carousel__button-prev ${activeIndex === 0 ? 'noactive' : ''}`}
            onClick={() => updateIndex(activeIndex - 1)}
            >
               <PrevArrow/>
            </button>
            <button
            className={`carousel__button carousel__button-next ${activeIndex === items.length - 1 ? 'noactive' : ''}`}
            onClick={() => updateIndex(activeIndex + 1)}
            >
                <NextArrow />
            </button>
        </div>
    </section>
  )
}

export {
    Carousel
} 
