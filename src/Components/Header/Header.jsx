import Container from "../Layouts/Container"
import { PiSunHorizonFill } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white font-bold">
      <Container>

       <div className="flex justify-between ">
         <div className="flex items-center gap-[10px]">
          <p><PiSunHorizonFill /> </p>
          <span>15 <sup>0C</sup></span>
          <p>New York</p>
        </div>

        <div className="flex  items-center gap-[15px]">
          <MdOutlineWatchLater />
          <p>Wednesday, 8 January 2025</p>
          <p className="bg-[#F65050] py-[14px] px-[14px] text-white">Breaking News</p>
          <p>Indonesia says located black box recorders from crashed plane</p>
        </div>

        <div  className="flex  items-center gap-5">
          <p className="bg-[#1B7BFD] py-[8px] px-[9px] rounded-full text-white"><FaFacebookF /></p>
          <p className="bg-[#42C0F5] py-[8px] px-[9px] rounded-full text-white"><FaTwitter /></p>
          <p className="bg-[#C23785] py-[8px] px-[9px] rounded-full text-white"><AiFillInstagram  /></p>
          <p className="bg-[#EF5043] py-[8px] px-[9px] rounded-full text-white"><FaYoutube  /></p>
        </div>
       </div>

      </Container>
    </div>
  )
}

export default Header