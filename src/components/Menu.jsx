import React from 'react'
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <nav>
        <Link to="/Registration">რეგისტრაცია</Link> 
        <Link to="/Login">ავტორიზაცია</Link> 
    </nav>
  )
}

export default Menu