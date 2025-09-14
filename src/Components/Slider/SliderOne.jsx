
// import Think from "../../assets/Think.png"

import Think from "../../assets/Think.png"
import Laptop from "../../assets/Laptop.png"
import Mouse from "../../assets/Mouse.png"
import Keybord from "../../assets/Keybord.png"
import Watch from "../../assets/Watch.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderOne = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
     <div className="slider-container">
  <Slider {...settings}>
    <div className="px-2">
      <img className="h-[350px] w-full object-cover rounded-md" src={Think} alt="" />
    </div>
    <div className="px-2">
      <img className="h-[350px] w-full object-cover rounded-md" src={Laptop} alt="" />
    </div>
    <div className="px-2">
      <img className="h-[350px] w-full object-cover rounded-md" src={Mouse} alt="" />
    </div>
    <div className="px-2">
      <img className="h-[350px] w-full object-cover rounded-md" src={Keybord} alt="" />
    </div>
    <div className="px-2">
      <img className="h-[350px] w-full object-cover rounded-md" src={Watch} alt="" />
    </div>

  </Slider>
</div>

    </div>
  )
}

export default SliderOne