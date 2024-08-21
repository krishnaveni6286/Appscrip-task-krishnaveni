
// import React from "react" 
// import "./nav.css"
// import Custom from "../../customizable/custom"
// import { useState } from "react"

// const NavBar =()=>{
//     const[data,setData]=useState(null)

//     const handleClick =()=>{
//         setData(data==="HIDE FILTER" ? "SHOW FILTER" :"HIDE FILTER")
//     }
//     return(
//         <div className="list1">
//             <ul className="list-item1">
//                 <hr className="hline"></hr>
//                 <li>3426   ITEMS</li>
//                 <li onClick={handleClick}>{data}</li>
//                 <li className="list-item3">RECOMMANDED</li>
//                 <hr className="hline"></hr>
//             </ul>
//             {data==="SHOW FILTER" && <Custom/>}

//         </div>
//     )
// }

// export default NavBar;


import React, { useState } from "react";
import "./nav.css";
import Custom from "../../customizable/custom";
import Content1 from "../../cotnent1/content1";


const NavBar = () => {
  const [data, setData] = useState("SHOW FILTER");

  const handleClick = () => {
    setData(data === "HIDE FILTER" ? "SHOW FILTER" : "HIDE FILTER");
  };

  return (
    <div className="list1">
      <ul className="list-item1">
        <hr className="hline" />
        <li>3426 ITEMS</li>
        <li onClick={handleClick}>{data}</li>
        <li className="list-item3">RECOMMENDED</li>
        <hr className="hline" />
      </ul>
      {data === "SHOW FILTER" && <Custom /> }
    </div>
  );
};

export default NavBar;
