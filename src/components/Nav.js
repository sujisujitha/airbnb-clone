import { Search, ExpandMore,AccountCircle, Language } from '@mui/icons-material';
import React from 'react';
import './Nav.css';
//import SearchIcon from '@material-ui/icons/Search';

export default function Navbar(){
    return(
        <div className="header">
             <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="airbnb"/>
        <div className="header__center">
            <input type="text"/>
            <Search/>
        </div>
         <div className="header__right">
            <p>Become a Host</p>
            <Language/>
            <ExpandMore/>
            <AccountCircle/>
        </div>
</div>
       
    )
}