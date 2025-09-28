import Container from "../Layouts/Container"
import { PiSunHorizonFill } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaYoutube } from "react-icons/fa";

import Facebook from "../../assets/facebook.mp4"
import Instagram from "../../assets/instagram.mp4"
import Twiter from "../../assets/twiter.mp4"
import Youtube from "../../assets/youtube.mp4"

const Header = () => {
  return (
    <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white font-bold py-5">
      <Container>

       <div className=" md:flex md:items-center md:justify-between ">
         <div className="flex items-center gap-[10px]">
          <p><PiSunHorizonFill /> </p>
          <span>15 <sup>0C</sup></span>
          <p>New York</p>
        </div>

        <div className="md:flex  items-center gap-[15px]">
          <p className="md:block hidden"><MdOutlineWatchLater /></p>
          <p className="mt-5 md:mt-0">Wednesday, 8 January 2025</p>
          <p className="bg-[#F65050] py-[14px] w-fit px-[14px] text-white mt-5 md:mt-0">Breaking News</p>
          <p className="mt-5 md:mt-0">Indonesia says located black box recorders from crashed plane</p>
        </div>

        {/* <div  className="flex mt-5 md:mt-0 items-center gap-5 ">
          <p className="bg-[#1B7BFD] py-[8px] px-[9px] rounded-full text-white"><FaFacebookF /></p>
          <p className="bg-[#42C0F5] py-[8px] px-[9px] rounded-full text-white"><FaTwitter /></p>
          <p className="bg-[#C23785] py-[8px] px-[9px] rounded-full text-white"><AiFillInstagram  /></p>
          <p className="bg-[#EF5043] py-[8px] px-[9px] rounded-full text-white"><FaYoutube  /></p>
        </div> */}
        <div>
          <ul   className="flex mt-5 md:mt-0 items-center gap-5 ">
            <li>
             <video src={Facebook} autoPlay loop muted playsInline className="w-10 h-10 rounded-full"/>
            </li>
            <li>
             <video src={Instagram} autoPlay loop muted playsInline className="w-10 h-10 rounded-full"/>
            </li>
            <li>
             <video src={Twiter} autoPlay loop muted playsInline className="w-10 h-10 rounded-full"/>
            </li>
            <li>
             <video src={Youtube} autoPlay loop muted playsInline className="w-10 h-10 rounded-full"/>
            </li>
          </ul>
        </div>

       </div>

      </Container>
    </div>
  )
}

export default Header