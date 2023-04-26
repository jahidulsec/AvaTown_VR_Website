import React, { useEffect, useState } from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

const Card = ({img, gen}) => {
    const [active, setActive] = useState(false)
    const [redFav, setRedFav] = useState(false)

    

  return (

        <div className='card'>
            <div className="container">
                <div className="img">
                    <Link to={`item/123`} className='link'><img src={`/Avatar_Pictures/VRC image ${img}(${gen}).png`} alt="" /></Link>
                    <div className="add">
                        <span class="material-symbols-outlined">shopping_cart</span> Add
                    </div>
                </div>
                <div className="title">
                    <h2>Avatar name “Avatown” -nice original avatar of Avatown</h2>
                </div>
                <div className="rating">
                    <div className="stars">
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                    </div>
                    <div className="likes">
                        4.7 & 100Likes
                    </div>
                    <span className={(redFav) ?"material-symbols-outlined redFav": "material-symbols-outlined"} onClick={()=> {setRedFav(!redFav)}}>favorite</span>
                </div>
                <div className="avatar">
                    <img src="/Avatar_Pictures/VRC image A(F).png" alt="" />
                    <span>Avatar's Joe</span>
                </div>
                <div className="price">
                    <span>$</span>50.00
                </div>
                <div className="status">
                    <span className="blue"></span>
                    <span>PC only</span>
                </div>
                <div className="para">
                    <p>Auto upload service ready, you can use this avatar within 24 hours.</p>
                    <span class="material-symbols-outlined icon" onClick={()=> {setActive(!active)}}>ios_share</span>
                    {(active) && <div className="copy">
                        <span class="material-symbols-outlined">link</span>
                        <span className="link">Copy link</span>
                    </div>}
                </div>
            </div>
        </div>
  )
}

export default Card