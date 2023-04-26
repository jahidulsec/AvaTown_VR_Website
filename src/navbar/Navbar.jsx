import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <Link className='link' to={`/`}><img src="/Logo/logo_avatown_manual_1_basi_inverse.png" alt="" /></Link>
                <h1>Go to Marketpage</h1>
            </div>
            <div className="right">
              <div className="searchBox">
                <input type="text" name="" id="" />
                <span class="material-symbols-outlined">search</span>
              </div>
              <div className="notification">
                <span class="material-symbols-outlined">notifications</span>
                <span className="redNot">2</span>
              </div>
              <div className="cart">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span className="redNot">2</span>
              </div>
              <div className="user">
                <span class="material-symbols-outlined">person</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar