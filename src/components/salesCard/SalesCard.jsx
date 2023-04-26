import React from 'react'
import "./SalesCard.scss"

const SalesCard = ({img}) => {
  return (
    <div className='salesCard'>
        <img src={`/Avatar_Pictures/VRC image ${img}(F).png`} alt="" />
        <div className="details">
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
            </div>
            <div className="avatar">
                <img src="/Avatar_Pictures/VRC image A(F).png" alt="" />
                <span>Avatar's Joe</span>
            </div>
            <div className="price">
                <span>$</span>50.00 | <span className="blue"></span> <span>PC only</span>
            </div>
        </div>
    </div>
  )
}

export default SalesCard