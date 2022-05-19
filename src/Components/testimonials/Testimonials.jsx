import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar : AVTR1,
    name : 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit consequatur quod quas veniam commodi optio dicta? Asperiores facere, perspiciatis laborum nam repudiandae reprehenderit fuga. Eius aliquid ratione reprehenderit mollitia.'
  },
  {
    avatar : AVTR2,
    name : 'Robert sllo',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit consequatur quod quas veniam commodi optio dicta? Asperiores facere, perspiciatis laborum nam repudiandae reprehenderit fuga. Eius aliquid ratione reprehenderit mollitia.'
  },
  {
    avatar : AVTR3,
    name : 'Shatta wale',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit consequatur quod quas veniam commodi optio dicta? Asperiores facere, perspiciatis laborum nam repudiandae reprehenderit fuga. Eius aliquid ratione reprehenderit mollitia.'
  },
  {
    avatar : AVTR4,
    name : 'makarthi',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit consequatur quod quas veniam commodi optio dicta? Asperiores facere, perspiciatis laborum nam repudiandae reprehenderit fuga. Eius aliquid ratione reprehenderit mollitia.'
  },
  
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container' 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          } )
        }
        
            
      </Swiper>
    </section>
  )
}

export default Testimonials