import React from "react";
const TopVideos = () => {
  return (
    <section className="top-videos">
      <h2>Top Videos</h2>
      <div className="video-grid">
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
      </div>
    </section>
  );
};

export default TopVideos;
