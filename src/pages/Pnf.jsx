
import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
    <>
        <Header/>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img height={'80%'} src="https://assets.dochipo.com/editor/animations/404-error/45944626-6789-4eb1-8c49-28696d67a690.gif" alt="" />
            <h1 className='fw-bold'>Page Not Found</h1>
            <Link to={'/'}>Return to Home</Link>
        </div>
    </>
  )
}

export default Pnf