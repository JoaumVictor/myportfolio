import './style.scss';
import React from 'react';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import images from  '../../img';
import link from '../../helpers/links'

export default function AboutMe() {
  useEffect(() => {
    ScrollReveal().reveal('.aboutMe');
  }, [])

  return (
    <div className='aboutMe'>
      <section>
        <p>Meu nome é Victor e eu sou estudante <br/> de desenvolvimento web na <a href={link.trybe} target="_blank" >Trybe</a></p>
      </section>
      <div className="image-box">
        <img src={ images.profilePhoto } alt="Foto de Victor Fausto" />
      </div>
    </div>
  )
}
