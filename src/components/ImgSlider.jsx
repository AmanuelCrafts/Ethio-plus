import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from '../assets/images/slider-badging.jpg';
import Img2 from '../assets/images/slider-scale.jpg';
import Img3 from '../assets/images/slider-badag.jpg';
import Img4 from '../assets/images/slider-scales.jpg';

const ImgSlider = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src={Img1} alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src={Img2} alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src={Img3} alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src={Img4} alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  height: 80vh;  /* Make the carousel take the full viewport height */

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  height: 80vh;  /* Ensure each slide takes the full viewport height */

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    height: 100%;  /* Ensure the anchor takes the full height of the slide */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;  /* Ensure the image covers the entire area */
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
