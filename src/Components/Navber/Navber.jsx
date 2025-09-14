import Container from "../Layouts/Container"
import { HiChevronDown } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";



const Navber = () => {
  return (
    <div className="font-poppins">
      <Container>
        <div className="bg-[#393939] ">
          <ul className="flex gap-[25px] font-bold text-white">
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Home</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">International</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Sports</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Opinion</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Business</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">YouthEntertainment</a></li>
            <li className="py-[15px] px-[17px] hover:bg-[#F65050]  hover:underline transition hover:h-full"> <a href="">Lifestyle</a></li>
            <li className="flex items-center px-[15px] hover:bg-[#F65050]  hover:underline transition "> <a href="">Pages </a><span><HiChevronDown /></span></li>

            <li className="flex items-center gap-5 border-l-4 text-white/30"><a href="">Search for</a><a href=""><span><FaSearch /></span></a></li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navber