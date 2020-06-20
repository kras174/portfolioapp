import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import WorksList from "../components/WorksList";
import { getWorks, getCategory } from "../actions";
import { useState } from "react";

const Home = (props) => {
  return (
    <div className="home-page">
      <h1>Главная страница</h1>
    </div>
  );
};

export default Home;
