import React, { useState } from 'react'
import './Sales.scss'
import SalesCard from '../../components/salesCard/SalesCard'

const Sales = () => {

    const [picActive, setPicActive] = useState("A")

  return (
    <div className='sales'>
        <h1>Full Avatar {">"} Human Based {">"} Female {">"} Avatar's Name</h1>
        <div className="container">
            
            <div className="left">
                <div className="item">
                    <div className="left">
                    <img src={`/Avatar_Pictures/VRC image ${picActive}(F).png`} alt="" />
                    </div>
                    <div className="right">
                        <h1>Avatar name “Avatown” -nice original avatar of Avatown</h1>
                        <div className="rating">
                            <div className="review">
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
                            <div className="icons">
                                <span class="material-symbols-outlined">share</span>
                                <span class="material-symbols-outlined">favorite</span>
                            </div>

                        </div>
                        <div className="status">
                            <span className="blue"></span>
                            <span>PC only</span>
                        </div>
                        <hr />
                        <div className="price">
                            <span>$</span>50.00
                        </div>
                        <div className="quantity">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" name="quantity" id="quantity" placeholder='1'/>
                        </div>
                        <div className="buttons">
                            <button className='buy'>Buy Now</button>
                            <button className='cart'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="imgSlide">
                    <span class="material-symbols-outlined" onClick={()=>{setPicActive("A")}}>arrow_back_ios</span>
                    <img 
                    className={picActive === "A" ? "img active" : "img"}
                        src={`/Avatar_Pictures/VRC image A(F).png`} 
                        alt=""
                        onClick={()=>{setPicActive("A")}}
                     />
                    <img 
                        className={picActive === "B" ? "img active" : "img"}
                        src={`/Avatar_Pictures/VRC image B(F).png`} 
                        alt=""
                        onClick={()=>{setPicActive("B")}}
                    />
                    <span class="material-symbols-outlined" onClick={()=>{setPicActive("B")}}>arrow_forward_ios</span>
                </div>
                <div className="reviews">
                    <h2>Reviews</h2>
                    <div className="item">
                        <div className="user">
                            <img className='pp' src="/img/noavatar.jpg" alt="" />
                            <div className="info">
                            <span>John Doe</span>
                            <div className="country">
                                <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" />
                                <span> United States</span>
                            </div>
                            </div>
                        </div>
                    <div className="stars">
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <span>5</span>
                    </div>
                    <p>
                        I definitely love working with this artist. 
                        She takes all my asks into consideration and illustrates them beautifully! Thank you!
                    </p>
                    <div className="helpful">
                        <span>Helpful?</span>
                        <img src="/img/like.png" alt="" />
                        <span>Yes</span>
                        <img src="/img/dislike.png" alt="" />
                        <span>No</span>
                    </div>
                    </div>
                    <hr />
                    <div className="item">
                    <div className="user">
                        <img className='pp' src="/img/noavatar.jpg" alt="" />
                        <div className="info">
                        <span>John Doe</span>
                        <div className="country">
                            <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" />
                            <span> United States</span>
                        </div>
                        </div>
                    </div>
                    <div className="stars">
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <span>5</span>
                    </div>
                    <p>
                        I definitely love working with this artist. 
                        She takes all my asks into consideration and illustrates them beautifully! Thank you!
                    </p>
                    <div className="helpful">
                        <span>Helpful?</span>
                        <img src="/img/like.png" alt="" />
                        <span>Yes</span>
                        <img src="/img/dislike.png" alt="" />
                        <span>No</span>
                    </div>
                    </div>
                    <hr />
                    <div className="item">
                    <div className="user">
                        <img className='pp' src="/img/noavatar.jpg" alt="" />
                        <div className="info">
                        <span>John Doe</span>
                        <div className="country">
                            <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" />
                            <span> United States</span>
                        </div>
                        </div>
                    </div>
                    <div className="stars">
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <span>5</span>
                    </div>
                    <p>
                        I definitely love working with this artist. 
                        She takes all my asks into consideration and illustrates them beautifully! Thank you!
                    </p>
                    <div className="helpful">
                        <span>Helpful?</span>
                        <img src="/img/like.png" alt="" />
                        <span>Yes</span>
                        <img src="/img/dislike.png" alt="" />
                        <span>No</span>
                    </div>
                </div>
          </div>
            </div>
            <div className="right">
                <h2>People also viewed</h2>
                <div className="items">
                    <SalesCard img={`A`}/>
                    <SalesCard img={`B`}/>
                    <SalesCard img={`D`}/>
                    <SalesCard img={`F`}/>
                </div>
                <h3>See more {">"}</h3>
            </div>
        </div>
    </div>
  )
}

export default Sales