import React from 'react';
import {Link} from 'react-router-dom';


function NavLink(props) {

  return (
    <>
      <div className="flex flex-row">
      <Link to={props.href} className={"text-white text-lg p-3 "}> {props.children} </Link>
        </div>
    </>
  );
}

export default NavLink;  