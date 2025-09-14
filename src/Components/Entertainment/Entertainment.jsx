import Container from "../Layouts/Container"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Woman from"../../assets/woman.png";
import One from"../../assets/womanOne.png";
import Boy from"../../assets/boy.png";
const Entertainment = () => {
   const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <div>
      <Container>

    <div className="slider-container">
      <Slider {...settings}>
        <div>
           <div className="border-b-4 mb-[25px] border-[#393939] ">
          <h2 className="text-[34px] font-medium text-[#F65050]">Entertainment</h2>
          </div>

          <div className="bg-[url(./assets/amanda.png)] bg-no-repeat bg-cover h-[450px] w-full mb-[25px] text-white pl-[30px]">
          <button className="bg-[#0088FF] py-[3px] px-[13px] font-medium mt-[25px]"><a href="">Hollywood</a></button>
          <h2 className="font-bold text-[30px] mt-[200px]">Amanda Seyfried became ‘really obsessed’ with ghost stories</h2>
          <p className="w-[550px] text-[18px] mt-[37px]">Hollywood actress Amanda Seyfried has recalled the time when she became obsessed with ghost stories</p>
          </div>
        </div>

        <div>
           <div className="border-b-4 mb-[25px] border-[#393939] ">
          <h2 className="text-[34px] font-medium text-[#F65050]">Entertainment</h2>
          </div>

          <div className="bg-[url(./assets/amanda.png)] bg-no-repeat bg-cover h-[450px] w-full mb-[25px] text-white pl-[30px]">
          <button className="bg-[#0088FF] py-[3px] px-[13px] font-medium mt-[25px]"><a href="">Hollywood</a></button>
          <h2 className="font-bold text-[30px] mt-[200px]">Amanda Seyfried became ‘really obsessed’ with ghost stories</h2>
          <p className="w-[550px] text-[18px] mt-[37px]">Hollywood actress Amanda Seyfried has recalled the time when she became obsessed with ghost stories</p>
          </div>
        </div>

          <div>
           <div className="border-b-4 mb-[25px] border-[#393939] ">
          <h2 className="text-[34px] font-medium text-[#F65050]">Entertainment</h2>
          </div>

          <div className="bg-[url(./assets/amanda.png)] bg-no-repeat bg-cover h-[450px] w-full mb-[25px] text-white pl-[30px]">
          <button className="bg-[#0088FF] py-[3px] px-[13px] font-medium mt-[25px]"><a href="">Hollywood</a></button>
          <h2 className="font-bold text-[30px] mt-[200px]">Amanda Seyfried became ‘really obsessed’ with ghost stories</h2>
          <p className="w-[550px] text-[18px] mt-[37px]">Hollywood actress Amanda Seyfried has recalled the time when she became obsessed with ghost stories</p>
          </div>
        </div>

        <div>
           <div className="border-b-4 mb-[25px] border-[#393939] ">
          <h2 className="text-[34px] font-medium text-[#F65050]">Entertainment</h2>
          </div>

          <div className="bg-[url(./assets/amanda.png)] bg-no-repeat bg-cover h-[450px] w-full mb-[25px] text-white pl-[30px]">
          <button className="bg-[#0088FF] py-[3px] px-[13px] font-medium mt-[25px]"><a href="">Hollywood</a></button>
          <h2 className="font-bold text-[30px] mt-[200px]">Amanda Seyfried became ‘really obsessed’ with ghost stories</h2>
          <p className="w-[550px] text-[18px] mt-[37px]">Hollywood actress Amanda Seyfried has recalled the time when she became obsessed with ghost stories</p>
          </div>
        </div>
      </Slider>
    </div>


    <div className="flex justify-between">
       <div className="flex items-center mt-[25px] gap-5">
        <img src={Woman} alt="" />
        <div>
          <p className="text-[14px]">Craig Bator - 9 Dec 2025</p>
          <h3 className="font-bold text-[18px] w-[300px]">Amanda Seyfried became ‘really obsessed’ with ghost stories</h3>
        </div>
      </div>


      <div className="flex items-center mt-[25px] gap-5">
        <img src={Boy} alt="" />
        <div>
          <p className="text-[14px]">Craig Bator - 9 Dec 2025</p>
          <h3 className="font-bold text-[18px] w-[300px]">Irrfan Khan’s Last film “ The Song of Scorpions” to release in 2021</h3>
        </div>
      </div>


      <div className="flex items-center mt-[25px] gap-5">
        <img src={One} alt="" />
        <div>
          <p className="text-[14px]">Craig Bator - 9 Dec 2025</p>
          <h3 className="font-bold text-[18px] w-[300px]">Apee Karim blessed with a daughter</h3>
        </div>
      </div>

    </div>

      </Container>
    </div>
  )
}

export default Entertainment