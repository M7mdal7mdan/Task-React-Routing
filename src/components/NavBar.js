import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    

    return (
        <div>
            <Link to= "/" > Home</Link>
            <Link to= "/ProductList" > Product List</Link>
            <Link to= "/Detail" > Details </Link>
        </div>
    );

    }
export default NavBar
