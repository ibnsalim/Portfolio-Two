import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, delectus cupiditate. Sint, quam? Laboriosam dolore perferendis expedita cupiditate, nihil, dicta et quas, perspiciatis illum dignissimos iste labore eveniet! Laudantium earum rerum repudiandae distinctio quasi repellendus? Omnis eos ratione enim officiis.
          </p>
          <a href='#contact' className='btn btn-primary' >Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About;