import React from 'react';
import'./Nav.css';

export default function Footer(){
    return(
        <div className='footer'>
           <p> © 2022 Airbnb Clone! No rights reserved - this is a demo!</p>

          <p>Created by <span className="footer__name"> Naveen </span></p>
        </div>
    )
}