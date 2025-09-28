import Container from "../Layouts/Container"
import { HiChevronDown } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navber = () => {
  const [show,setShow] = useState (false)
  return (
    <div className="font-poppins">
      <Container>
        <div className="bg-[#393939] md:block hidden">
          <ul className="md:flex gap-[25px] font-bold text-white">
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  tr"> <a href="">Home</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  transition "> <a href="">International</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  transition "> <a href="">Sports</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  transition "> <a href="">Opinion</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  transition "> <a href="">Business</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  transition "> <a href="">YouthEntertainment</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  transition "> <a href="">Lifestyle</a></li>
            <li className="flex items-center py-[15px] px-[15px] hover:bg-[#F65050]  transition "> <a href="">Pages </a><span><HiChevronDown /></span></li>

            <li className="mt-5 md:mt-0 py-5 ml-5 flex items-center gap-5 border-l-4 text-white/30"><a className="ml-10" href="">Search for</a><a href=""><span><FaSearch /></span></a></li>
          </ul>
        </div>

        <div className="md:hidden  flex justify-between">
          {
            show ?  <div className="bg-[#393939] ">
          <ul className="md:flex gap-[25px] font-bold text-white">
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Home</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">International</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Sports</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Opinion</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Business</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">YouthEntertainment</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Lifestyle</a></li>
            <li className="flex items-center py-[15px] px-[15px] hover:bg-[#F65050]  hover:underline transition "> <a href="">Pages </a><span><HiChevronDown /></span></li>

            <li className="mt-5 md:mt-0 py-5 ml-5 flex items-center gap-5"><a href="">Search for</a><a href=""><span><FaSearch /></span></a></li>
          </ul>
        </div>: ""
          }

          {
            show ? <RxCross2 onClick={()=> setShow(!show)} className="text-2xl"/> : 
            
            <FaBars onClick={()=> setShow(!show)} className="text-2xl"/>
          }
        </div>


      </Container>
    </div>
  )
}

export default Navber