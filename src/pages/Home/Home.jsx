import React from 'react'
// import { useSelector } from 'react-redux';
import './Home.scss'
import Header from '../../components/header/index';
import AboutMe from '../../components/aboutMe/index';

export const Home = () => {
  // const { dependencies } = useSelector((state) => state.reducer);

  return (
    <div className="home-page">
      <Header />
      <AboutMe />
    </div>
  )
}
