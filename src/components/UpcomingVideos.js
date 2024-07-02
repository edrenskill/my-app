import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const UpcomingVideos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="upcoming-videos">
      <h2>Upcoming Videos</h2>
      <Slider {...settings}>
        <div className="video-card">
          <img src="image1.jpg" alt="The Red Wedding" />
          <h3>The Red Wedding</h3>
          <p>DANAERYS • JON SNOW • CERSEI</p>
        </div>
        <div className="video-card">
          <img src="image2.jpg" alt="The Red Wedding" />
          <h3>The Red Wedding</h3>
          <p>DANAERYS • JON SNOW • CERSEI</p>
        </div>
        <div className="video-card">
          <img src="image3.jpg" alt="The Red Wedding" />
          <h3>The Red Wedding</h3>
          <p>DANAERYS • JON SNOW • CERSEI</p>
        </div>
        <div className="video-card">
          <img src="image4.jpg" alt="The Red Wedding" />
          <h3>The Red Wedding</h3>
          <p>DANAERYS • JON SNOW • CERSEI</p>
        </div>
      </Slider>
    </section>
  );
};

export default UpcomingVideos;
