import Container from "../Layouts/Container"
import Newscast from "../../assets/Newscast.png"
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import Done from "../../assets/Done.png"
import Grass from "../../assets/Grass.png"
import Sweets from "../../assets/Sweets.png"
import House from "../../assets/House.png"
import Vagitable from "../../assets/Vagitable.png"
import Image from "../../assets/Image.png"


const Footer = () => {
  return (
    <div className="bg-black font-poppins mt-[50px]">
      <Container>
        <div className="flex justify-between text-white pl-[135px] py-[50px] w-full">
          <div>
            <img src={Newscast} alt="" />
            <p className="w-[270px] mt-[30px] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, pellentesque dictum posuere id diam rutrum. </p>

            <div className="flex gap-7 mt-[30px]">
              <p className="bg-[#1B7BFD] py-[10px] px-[10px] rounded-full"><a href=""> <FaFacebookF /></a></p>
              <p className="bg-[#42C0F5] py-[10px] px-[10px] rounded-full"><a href=""> <FaTwitter /></a></p> 
              <p className="bg-[#C23785] py-[10px] px-[10px] rounded-full"><a href=""> <AiFillInstagram /></a></p>
              <p className="bg-[#EF5043] py-[10px] px-[10px] rounded-full"><a href=""> <IoLogoYoutube /></a></p>
            </div>
          </div>


          <div>
            <h2 className="font-bold text-[30px]">Photo gallery</h2>
            <div className="border-b-4 border-[#F65050] w-[300px] mt-2"></div>
            <div className="flex gap-5 mt-4">
              <img src={Done} alt="" />
              <img src={Grass} alt="" />
              <img src={House} alt="" />
            </div>
            <div className="flex gap-5 mt-4">
              <img src={Sweets} alt="" />
              <img src={Vagitable} alt="" />
              <img src={Image} alt="" />
            </div>
          </div>




          <div>
            <h2 className="font-bold text-[30px]">Tags</h2>
            <div className="border-b-4 border-[#F65050] w-[360px] mt-2"></div>
            <div className="flex gap-2 mt-4">
              <button className="py-[5px] px-[10px] rounded-md hover:opacity-80 transition bg-[#F65050]"><a href="">Football</a></button>
              <button className="py-[5px] px-[10px] rounded-md hover:opacity-80 transition bg-[#0088FF]"><a href="">Cricket</a></button>
              <button className="py-[5px] px-[10px] rounded-md hover:opacity-80 transition bg-[#A56CBD]"><a href="">Covid 19</a></button>
              <button className="py-[5px] px-[10px] rounded-md hover:opacity-80 transition bg-[#997C]"><a href="">Life Style</a></button>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="py-[5px] px-[15px] rounded-md hover:opacity-80 transition bg-[#FFB8B8]"><a href="">Tranding News</a></button>
              <button className="py-[5px] px-[15px] rounded-md hover:opacity-80 transition bg-[#49CFE8]"><a href="">Technology</a></button>
              <button className="py-[5px] px-[12px] rounded-md hover:opacity-80 transition bg-[#4281FF] "><a href="">Travel</a></button>
            </div>
          </div>





           <div>
            <h2 className="font-bold text-[30px]">Photo gallery</h2>
            <div className="border-b-4 border-[#F65050] w-[300px] mt-2"></div>
            <p className="w-[270px] mt-[30px] text-[16px]">To be updated with all the latest news, offers and special annoucements. </p>
            <input className="bg-white text-black px-[92px] py-[15px] text-center mt-[20px]" type="text" placeholder="Your email address"/>
            <div>
              <button className="py-[10px] px-[150.5px] bg-[#F65050] mt-[15px] hover:bg-[#4281FF] transition text-[18px]"><a href="">Subscribe</a></button>
            </div>
          </div>






        </div>
      </Container>
    </div>
  )
}

export default Footer