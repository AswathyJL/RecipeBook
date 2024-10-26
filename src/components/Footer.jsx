
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{zIndex:1, paddingTop:'30px'}} className='position-sticky w-100 shadow mt-5 py-3 bg-primary'>
      <div className='container d-flex justify-content-between flex-wrap'>
        <ul style={{listStyle:'none', width:'500px', fontSize:'1.20rem'}} className='mt-1 text-white'>
          <li ><Link style={{textDecoration:'none',color:'white', fontWeight:'700' , fontSize:'1.5rem'}} to={'/'} className='text-warning'>
              <i className="fa-solid fa-utensils me-2"></i>{' '}
              RecipeBook
           </Link></li>
           <li  className='mt-3'>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</li>
           <li className='mt-3'>Code licensed Luminar, docs CC BY 3.0.</li>
           <li className='mt-3'>Currently v5.3.2.</li>
        </ul>
        <div className="d-flex flex-column justify-content-start">
          <h5 className='fw-3 mb-3'>Links</h5>
          <Link style={{textDecoration:'none' ,color:'white', fontSize:'1.25rem'}}  to={'/'} className='mb-3 '>Landing Page</Link>
          <Link style={{textDecoration:'none' ,color:'white', fontSize:'1.25rem'}} to={'/home'}>Home Page</Link>
        </div>
        <div className="d-flex flex-column justify-content-start">
          <h5 className='fw-3 mb-3'>Guides</h5>
          <h6 className='text-white fs-5 mb-3'>React</h6>
          <h6 className='text-white fs-5 mb-3'>React Boostrap</h6>
          <h6 className='text-white fs-5 '>React Router</h6>
        </div>
        <div className="d-flex flex-column justify-content-start">
          <h5 className='fw-3 mb-3'>Contact Us</h5>
          <div className='d-flex justify-content-between'>
            <input type="text" className='form-control me-3 rounded' placeholder='Enter your email here'/>
            <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between mt-3 text-white'>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-solid fa-phone"></i>
          </div>
        </div>
      </div>
      <h6 className='text-center'>Copyright © June 2024 Batch, RecipeBook. Built with React.</h6>
    </div>
  )
}

export default Footer