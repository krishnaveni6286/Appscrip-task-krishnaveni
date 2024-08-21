import React from "react"
import "./home.css"
import Header from "../header/header"
import NavBar from "./nav/nav"
import Custom from "../customizable/custom"
import Content from "../content/content"
import Footer from "../footer/footer"
import Recommanded from "../recomanded/recomanded"


const Home =()=>{
    return(
        <>
        <div className="container">
                <ul className="icons">
               <li> <img src="../images/Logo.png"></img></li>
               <li> <h1 className="heading">LOGO</h1></li>
               <li> <img src="../images/search-normal.jpg"></img></li>
               <li>  <img src="../images/heart.png"></img></li>
               <li> <img src="../images/shopping-bag.png"></img></li>
               <li> <img src="../images/profile.png"></img></li>
               <li> <img src="../images/Language.png"></img></li>
                </ul>
        
            <Header></Header>
           
            <h1 className="heading1">DISCOVER OUR PRODUCTS</h1>
            <p className="para">&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur. Amet est posuere rhonocus <br></br> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor. </p>
            
            

            </div>
            <NavBar/>
            <Recommanded/>
             {/* <Custom/> */}
             <Content/>
             <div>
             <Footer/>
             </div>
            </>   
    )
}
export default Home;