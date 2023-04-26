import React, { useEffect, useState } from 'react'
import "./Home.scss"
import Card from '../../components/card/Card'
import {avatar} from "../../data"
const Home = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(12)
    const [fullAvatarActive, setFullAvatarActive] =  useState(false)
    const [humanBasedActive, setHumanBasedActive] =  useState(false)
    const [titleActive, setTitleActive] = useState("All items")
    const [genActive, setGenActive] = useState(null)


   

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = avatar

    const filterPosts = avatar.filter(item => {
        return item.gen === genActive
    })


    
    console.log(filterPosts.length, currentPosts.length)


  return (
    <div className='home'>
        <div className="container">
            <div className="left">
                <div className="cat">
                    <h2>Category</h2>
                    <div className='list1'>
                        <span 
                            className={fullAvatarActive ? "active": ""} 
                            onClick={()=> {setFullAvatarActive(!fullAvatarActive), !fullAvatarActive ? setTitleActive("Full Avatars") : setTitleActive("All items"), setGenActive(null)}}
                        >
                            Full avatar
                        </span>
                            {(fullAvatarActive) && 
                                <div className='list2'>
                                    <span
                                        className={humanBasedActive ? "active" : ""} 
                                        onClick={()=> {setHumanBasedActive(!humanBasedActive), !humanBasedActive ? setTitleActive("Full Avatars > Human based") : setTitleActive("Full Avatars"), setGenActive(null) }}
                                    >
                                        Human based
                                    </span>
                                        {(humanBasedActive) &&
                                            <div className="list3">
                                                <span onClick={()=> {setGenActive("M"), setTitleActive("Full Avatars > Human based > Male"), setCurrentPage(1)}}>Male</span>
                                                <span onClick={()=> {setGenActive("F"), setTitleActive("Full Avatars > Human based > Female"), setCurrentPage(1)}}>Female</span>
                                                <span>Unisex</span>
                                            </div>}
                                    <span>Animal & Mythical creature based</span>
                                    <span>Robot based</span>
                                    <span>Others</span>
                            </div>}
                        <span>Others</span>
                    </div>
                </div>
                <div className="content">
                    <h2>Contents</h2>
                    <div className="field">
                        <input type="checkbox" name="quest" id="quest" />
                        <label htmlFor="quest">VRChat(Quest) <span className="green"></span>
                        </label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="pcvr" id="pcvr" />
                        <label htmlFor="pcvr">VRChat(PCVR) <span className="blue"></span></label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="others" id="others" />
                        <label htmlFor="others">Others</label>
                    </div>
                </div>
                <div className="price">
                    <h2>Price</h2>
                    <div className="field">
                        <input type="checkbox" name="under10" id="under10" />
                        <label htmlFor="under10">Under $10</label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="10to20" id="10to20" />
                        <label htmlFor="10to20">$10 to $20</label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="20to30" id="20to30" />
                        <label htmlFor="20to30">$20 to $30</label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="30to40" id="30to40" />
                        <label htmlFor="30to40">$30 to $40</label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="40to50" id="40to50" />
                        <label htmlFor="40to50">$40 to $50</label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="50to70" id="50to70" />
                        <label htmlFor="50to70">$50 to $70</label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="70above" id="70above" />
                        <label htmlFor="70above">$70 & above</label>
                    </div>
                </div>
                <div className="polygon">
                    <h2>Polygon Amount</h2>
                    <div className="field">
                        <input type="checkbox" name="u75" id="u75" />
                        <label htmlFor="u75">
                            under <span class="material-symbols-outlined">change_history</span> 7,500
                        </label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="75to10" id="75to10" />
                        <label htmlFor="75to10">
                        <span class="material-symbols-outlined">change_history</span> 7,500 to <span class="material-symbols-outlined">change_history</span> 10,000
                        </label>
                    </div><div className="field">
                        <input type="checkbox" name="10to15" id="10to15" />
                        <label htmlFor="10to15">
                        <span class="material-symbols-outlined">change_history</span>10,000 to <span class="material-symbols-outlined">change_history</span> 15,000
                        </label>
                    </div><div className="field">
                        <input type="checkbox" name="15to20" id="15to20" />
                        <label htmlFor="15to20">
                        <span class="material-symbols-outlined">change_history</span>15,000 to <span class="material-symbols-outlined">change_history</span> 20,000
                        </label>
                    </div><div className="field">
                        <input type="checkbox" name="20to32" id="20to32" />
                        <label htmlFor="20to32">
                        <span class="material-symbols-outlined">change_history</span>20,000 to <span class="material-symbols-outlined">change_history</span> 32,000
                        </label>
                    </div><div className="field">
                        <input type="checkbox" name="32to70" id="32to70" />
                        <label htmlFor="32to70">
                        <span class="material-symbols-outlined">change_history</span>32,000 to <span class="material-symbols-outlined">change_history</span> 70,000
                        </label>
                    </div><div className="field">
                        <input type="checkbox" name="a70" id="a70" />
                        <label htmlFor="a70">
                        <span class="material-symbols-outlined">change_history</span>7,500 & above</label>
                    </div>
                </div>
                <div className="uploadSupport">
                    <h2>Auto Upload Support</h2>
                    <div className="field">
                        <input type="checkbox" name="support" id="support" />
                        <label htmlFor="support">Supported</label>
                    </div>
                    <div className="field">
                        <input type="checkbox" name="unsupport" id="unsupport" />
                        <label htmlFor="unsupport">Unsupported</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h1>{titleActive}</h1>
                    <select name="sort" id="sort">
                        <option value="" disabled selected>Sorted By</option>
                        <option value="featured">Featured</option>
                        <option value="pLowToHigh">Price: Low to High</option>
                        <option value="pHighToLow">Price: High to Low</option>
                        <option value="review">Customer Review</option>
                        <option value="polyLowToHigh">Polygon: Low to High</option>
                        <option value="polyHighToLow">Polygon: High to Low</option>
                    </select>
                </div>
                <div className="items">
                    {}
                    {(genActive !== null) ? filterPosts.slice(firstPostIndex,lastPostIndex).map((item)=> (
                        <Card img={item.img} gen={item.gen} key={item.id} />
                    )):
                    currentPosts.slice(firstPostIndex,lastPostIndex).map((item)=> (
                        <Card img={item.img} gen={item.gen} key={item.id} />
                    ))
                    }
                </div>
                { (genActive !== "M") &&
                <div className="pagination">
                    <span class="material-symbols-outlined" onClick={()=>{setCurrentPage(1)}}>arrow_back_ios</span>
                    <span className={currentPage === 1 ?'page active': 'page'} onClick={()=>{setCurrentPage(1)}}>1</span>
                    <span className={currentPage === 2 ?'page active': 'page'} onClick={()=>{setCurrentPage(2)}}>2</span>
                    <span class="material-symbols-outlined" onClick={()=>{setCurrentPage(2)}}>arrow_forward_ios</span>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Home