import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import WorksList from "../components/WorksList";
import { getWorks, getCategory } from "../actions";
import { useState } from "react";

const Home = (props) => {
  const { user } = props.auth;
  return (
    <div className="home-page">
      <h1>Главная страница</h1>
      {user && <h3>Добро пожаловать {user.name}</h3>}
    </div>
  );
};

export default Home;
