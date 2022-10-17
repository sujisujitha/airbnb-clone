import React,{useState} from 'react';
import './Nav.css';
// import Search from './Search'

export default function Hero(){
            const[showSearch, setShowSearch]=useState(false);

    return(
   
        <div className="banner">
            <div className="banner__search">
                {showSearch && <h1>hjkl</h1>}
                <button onClick={()=>setShowSearch(!showSearch)} className='banner__button' variant='outlined'>Search Dates</button>
            </div>
            <div className="banner__info">
                <h1>
                Get out and stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
                <button className="check" variant="outlined">Explore Nearby</button>
            </div>
        </div>
     
    )
}