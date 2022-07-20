import React from 'react'
import './style.scss'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';

export default function Header() {
  return (
    <header>
      <section className='links'>
        <a className='icon' href=""><BsGithub /></a>
        <a className='icon pink' href=""><SiInstagram /></a>
        <a className='icon' href=""><BsLinkedin /></a>
      </section>
      <section className='options'>
        <a href="#">Quem sou eu</a>
        <a href="#">Meus projetos</a>
        <a href="#">Contato</a>
      </section>
    </header>
  )
}
