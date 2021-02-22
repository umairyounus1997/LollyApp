import { navigate } from "gatsby"
import React from "react"
import Header from "../component/Header"
//import Lolly from '../svg/lolly-image.svg'
import Lolly from '../component/Lolly'


export default function Home() {
  return (
  <div className="container">
    <Header/>
    <div className="listLollies"> 
    <div>
      <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43"/>
    </div>
    <div>
      <Lolly fillLollyTop="yellow" fillLollyMiddle="black" fillLollyBottom="red"/>
    </div>
    </div>
    <input type="botton" value="Create New Lollypop"
    onClick={
      ()=>{
        navigate("/CreateNew");
      }
    }
    > 
    
    </input>
    </div>
    
    );
}
