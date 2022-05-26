import React from 'react'
import { useSelector } from 'react-redux';
import './Home.scss'

export const Home = () => {
  const { dependencies } = useSelector((state) => state.reducer);

  return (
    <div className="home-page">
      <h1>Opa salve, tá ai seu template rápido!</h1>
      <img src="https://i.pinimg.com/236x/15/9c/85/159c85252e164184160e0a404a73d0ca.jpg" alt="Victor Dev" />
      <h2>Bibliotecas já instaladas:</h2>
      <div className="dependencies">
        { dependencies.map((each) => (
          <h2>{ each }</h2>
        ))}
      </div>
      <h2>Ao trabalho jovem!</h2>
    </div>
  )
}
