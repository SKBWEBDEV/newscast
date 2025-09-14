import Container from "../Layouts/Container"
import Dog from "../../assets/Dog.png"
import Door from "../../assets/Door.png"
import Light from "../../assets/Light.png"
import Setar from "../../assets/Setar.png"
import Sakib from "../../assets/Sakib.png"
import { IoIosArrowForward } from "react-icons/io";


const Lifestyle = () => {
  return (
    <div className="my-[50px] font-poppins">
      <Container>
        <div className="flex justify-between items-start">
          {/* Left side */}
          <div>
            
            <div className="flex justify-between border-b-4 border-[#F65050] pb-2">
              <div>
                <h3 className="font-medium text-[28px] text-[#F65050] whitespace-nowrap">Life Style</h3>
              </div>
              <div>
                  <ul className="flex gap-5 text-white font-bold ">
              <li className="bg-[#F65050] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">All</a>
              </li>
              <li className="bg-[#A56CBD] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">Travel</a>
              </li>
              <li className="bg-[#2ECC71] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">Recipes</a>
              </li>
               <li className="bg-[#0088FF] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">Health & Fitness</a>
              </li>
              <li className="bg-[#997C00] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">Music</a>
              </li>
            </ul>
              </div>
            </div>
          
        
        <div className="flex gap-[50px]">
          <div>
          <div className="bg-[url(./assets/doc.png)] bg-no-repeat bg-cover h-[270px] w-[500px] mt-[25px]">
        <button className="bg-[#997C00] py-[10px] px-[13px] text-white rounded-md hover:opacity-80 mt-[25px] ml-[25px] font-bold"><a href="">Health & Fitness</a></button>
        </div>
        
        <div className="text-[#393939]/60">
          <p className="mt-[25px] ">Craig Bator - 9 Sep 2025</p>
          <h2 className="text-[#393939] font-bold text-[28px] w-[500px]  ">‘Institutional delivery vital for reducing maternal and neonatal deaths’</h2>
          <p className="w-[480px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate.... </p>
        </div>

        <div className="flex items-center mt-[25px]">
          <div>
            <img src={Dog} alt="" />
          </div>
          <div className="ml-[12px]">
            <p className="text-[#393939]/60">Craig Bator - 9 sep 2025</p>
            <h3 className="text-[22px] w-[300px]">Best things you can do on a solo mountain climb</h3>
          </div>
        </div>

        <div className="flex items-center mt-[25px]">
          <div>
            <img src={Door} alt="" />
          </div>
          <div className="ml-[12px]">
            <p className="text-[#393939]/60">Craig Bator - 9 sep 2025</p>
            <h3 className="text-[22px] w-[300px]">Creative decorationg with houseplants</h3>
          </div>
        </div>

        </div>
        


          <div>
          <div className="bg-[url(./assets/Doctor.png)] bg-no-repeat bg-cover h-[270px] w-[500px] mt-[25px]">
        <button className="bg-[#2ECC71] py-[10px] px-[13px] text-white rounded-md hover:opacity-80 mt-[25px] ml-[25px] font-bold"><a href="">Health & Fitness</a></button>
        </div>
        
        <div className="text-[#393939]/60">
          <p className="mt-[25px] text-[#393939]/60">Craig Bator - 9 Sep 2025</p>
          <h2 className="text-[#393939] font-bold text-[28px] w-[500px]">Being self-controlled child may lead to healthier middle-age</h2>
          <p className="w-[480px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate.... </p>
        </div>

        <div className="flex items-center mt-[25px]">
          <div>
            <img src={Light} alt="" />
          </div>
          <div className="ml-[12px]">
            <p className="text-[#393939]/60">Craig Bator - 9 sep 2025</p>
            <h3 className="text-[22px] w-[300px]">Best things you can do on a solo mountain climb</h3>
          </div>
        </div>

        <div className="flex items-center mt-[25px]">
          <div>
            <img src={Setar} alt="" />
          </div>
          <div className="ml-[12px]">
            <p className="text-[#393939]/60">Craig Bator - 9 sep 2025</p>
            <h3 className="text-[22px] w-[300px]">Creative decorationg with houseplants</h3>
          </div>
        </div>

        </div>
        
        
      
        
        </div>
        
        
          </div>
        
        {/* ---------------------left side end-------------------------- */}
        
        
        
          {/* Right side */}
          <div>
            <div className="w-[370px] h-[235px] bg-[#DEDADA] text-center ">
              <h3 className="pt-[25px] font-bold text-[30px]">Get Latest Updates</h3>
              <input className="border-none  text-center py-[10px] mt-[25px] bg-white" type="text" placeholder="Your email address" />
              <button className="py-[7px] px-[60px] bg-[#F65050] text-white mt-[15px] font-bold text-[20px] hover:bg-[#49CFE8] transition" ><a href="">Subscribe</a></button>
            </div>

          <div>
              <div className=" border-b-4 border-[#F65050] pb-2 text-[#F65050] font-bold text-[30px] mt-[30px]">
                <h3>Categories</h3>
             </div>

             <div className="flex justify-between mt-[25px] font-bold">
              <div className="flex items-center gap-[5px]">
                <p><IoIosArrowForward /></p>
                <p>Life Style</p>
              </div>
              <div className="bg-[#F65050] py-[3px] px-[6px] text-white ">
                <p>50</p>
              </div>
             </div>

              <div className="flex justify-between mt-[25px] font-bold">
              <div className="flex items-center gap-[5px]">
                <p><IoIosArrowForward /></p>
                <p>World</p>
              </div>
              <div className="bg-[#A56CBD] py-[3px] px-[6px] text-white ">
                <p>55</p>
              </div>
             </div>

              <div className="flex justify-between mt-[25px] font-bold">
              <div className="flex items-center gap-[5px]">
                <p><IoIosArrowForward /></p>
                <p>Foods</p>
              </div>
              <div className="bg-[#C23785] py-[3px] px-[6px] text-white ">
                <p>40</p>
              </div>
             </div>

              <div className="flex justify-between mt-[25px] font-bold">
              <div className="flex items-center gap-[5px]">
                <p><IoIosArrowForward /></p>
                <p>Tachnology</p>
              </div>
              <div className="bg-[#4C60F5] py-[3px] px-[6px] text-white ">
                <p>10</p>
              </div>
             </div>

              <div className="flex justify-between mt-[25px] font-bold">
              <div className="flex items-center gap-[5px]">
                <p><IoIosArrowForward /></p>
                <p>Sports</p>
              </div>
              <div className="bg-[#0088FF] py-[3px] px-[6px] text-white ">
                <p>42</p>
              </div>
             </div>

              <div className="flex justify-between mt-[25px] font-bold">
              <div className="flex items-center gap-[5px]">
                <p><IoIosArrowForward /></p>
                <p>Football</p>
              </div>
              <div className="bg-[#F7679D] py-[3px] px-[12px] text-white ">
                <p>5</p>
              </div>
             </div>

              <div className="flex justify-between mt-[25px] font-bold">
              <div className="flex items-center gap-[5px]">
                <p><IoIosArrowForward /></p>
                <p>Cricket</p>
              </div>
              <div className="bg-[#42C0F5] py-[3px] px-[6px] text-white ">
                <p>67</p>
              </div>
             </div>

              <div className="flex justify-between mt-[25px] font-bold">
              <div className="flex items-center gap-[5px]">
                <p><IoIosArrowForward /></p>
                <p>Covid 19</p>
              </div>
              <div className="bg-[#49CFE8] py-[3px] px-[6px] text-white ">
                <p>12</p>
              </div>
             </div>




          </div>


          </div>


        {/* ---------------------right side end-------------------------- */}
        
        </div>


        <div className="bg-[url(./assets/black.png)] bg-no-repeat bg-cover py-[60px] w-[1000px] mt-[50px]">
        <div className="text-white flex justify-around">
          <div>
            <p className="text-[20px]">Best Selling BLOG and MAGAZINE Theme of All Time</p>
            <p className="text-red-600 text-[18px]">Experience the change!</p>
          </div>
          <div>
            <button className="bg-[#F65050] py-[11px] px-[34px] hover:bg-[#0088FF] transition text-[25px]"><a href="">PURCHASE NOW</a></button>
          </div>
        </div>
        </div>


{/* ---------------------------vedio part start--------------------------------------------- */}

    <div className="flex justify-between border-b-4 border-[#F65050] pb-2 w-[1000px] mt-[50px]">
              <div>
                <h3 className="font-medium text-[28px] text-[#F65050] whitespace-nowrap">Life Style</h3>
              </div>
              <div>
                  <ul className="flex gap-5 text-white font-bold ">
              <li className="bg-[#F65050] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">All</a>
              </li>
              <li className="bg-[#A56CBD] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">Travel</a>
              </li>
              <li className="bg-[#2ECC71] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">Recipes</a>
              </li>
               <li className="bg-[#0088FF] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">Health & Fitness</a>
              </li>
              <li className="bg-[#997C00] px-[20px] py-[8px] rounded-md hover:opacity-80 transition">
                <a href="#" className="no-underline">Music</a>
              </li>
            </ul>
              </div>
            </div>

        <div className="bg-[url(./assets/vedio.png)] bg-no-repeat bg-cover h-[500px] w-[1000px] mt-[50px]">
        <button className="text-white py-[7px] px-[25px]  bg-[#FE4A51] mt-[25px] ml-[25px]"><a href="">Esport</a></button>
        <div className="flex justify-center mt-[92px]">
          <img src={Sakib} alt="" />
        </div>
        <p className="text-[#FFFFFF]/60 mt-[70px] ml-[20px]">Craig Bator - 9 Sep 2025</p>
        <h2 className="text-white font-bold text-[45px] w-[828px] ml-[20px]">Play This Game for Free on Epic Store  This Weekend</h2>
        </div>




        <div className="flex justify-between w-[1000px] mt-[25px] gap-5">
          
          <div>
            <div className="bg-[url(./assets/vedioOne.png)] bg-no-repeat bg-cover h-[270px] w-[320px]">
            
            <button className="text-white py-[7px] px-[25px]  bg-[#49CFE8] mt-[25px] ml-[25px] font-bold"><a href="">Esport</a></button>
             <div className="flex justify-center pt-[50px]">
                <img src={Sakib} alt="" />
             </div>
            </div>
            <p className="text-[#393939]/60">Craig Bator - 9 Sep 2025</p>
            <h4 className="text-[#393939] font-bold text-[20px]">At Value-Focused Hotels, the Free Breakfast Gets Bigger</h4>
          </div>


          <div>
            <div className="bg-[url(./assets/vedioTow.png)] bg-no-repeat bg-cover h-[270px] w-[320px]">
            <button className="text-white py-[7px] px-[25px]  bg-[#26387A] mt-[25px] ml-[25px] font-bold"><a href="">Esport</a></button>
            <div className="flex justify-center pt-[50px]">
                <img src={Sakib} alt="" />
             </div>
            </div>
            <p className="text-[#393939]/60">Craig Bator - 9 Sep 2025</p>
            <h4 className="text-[#393939] font-bold text-[20px]">Failure is the condiment that gives success its flavor</h4>
          </div>


          <div>
            <div className="bg-[url(./assets/vedioThree.png)] bg-no-repeat bg-cover h-[270px] w-[320px]">
            <button className="text-white py-[7px] px-[25px]  bg-[#FB8282] mt-[25px] ml-[25px] font-bold"><a href="">Esport</a></button>
            <div className="flex justify-center pt-[50px]">
                <img src={Sakib} alt="" />
             </div>
            </div>
            <p className="text-[#393939]/60">Craig Bator - 9 Sep 2025</p>
            <h4 className="text-[#393939] font-bold text-[20px]">Les nouveaux maillots du Real Madrid pour la saison</h4>
          </div>
          
        </div>
{/* ---------------------------vedio part end--------------------------------------------- */}




      </Container>
    </div>
  )
}

export default Lifestyle