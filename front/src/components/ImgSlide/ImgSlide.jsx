import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImgSlide(props) {

    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical : false,
    };

  return (
    <div>
        {/* {props.imgUrl.map(url => {
            <div>
              {url}
              <img style={{width: 'inherit'}} src={url} />
            </div>
          })} */}
        <Slider {...settings}>
          {props.imgUrl.map(url => 
            <div >
              <img alt="" style={{maxHeight: "300px", margin: "auto"}} src={url} />
            </div>
          )}
        </Slider>
    </div>
  )
}
