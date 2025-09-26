import Container from "../Layouts/Container";
import Okey from "../../assets/news.png";

const News = () => {
  return (
    <div className="py-[40px]  md:px-[40px] font-poppins">
      <Container>
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <img src={Okey} alt="" />
          </div>

          <div className="hidden md:flex justify-around gap-3.5 items-center text-white bg-black py-[16px] w-[771px]">
            <div>
              <p className="w-[280px]">Best Selling BLOG and MAGAZINE Theme of All Time</p>
              <p className="text-[#F65050]">Experience the change!</p>
            </div>
            <p className="bg-[#F65050] py-[15px] px-[25px]">
              <a href="">PURCHASE NOW</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default News;
