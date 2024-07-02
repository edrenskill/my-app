import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestVideos from "./components/LatestVideos";
import TopVideos from "./components/TopVideos";
import UpcomingVideos from "./components/UpcomingVideos";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <TopVideos />
      <LatestVideos />
      <UpcomingVideos />
      <Footer />
    </div>
  );
}

export default App;
