import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import WorksList from "../components/WorksList";
import { getWorks, getCategory } from "../actions";
import { useState } from "react";

const Home = (props) => {
  const { works = [], categories = [], images = [] } = props;
  const [filter, setFilter] = useState("Все");

  const changeCategory = (category) => {
    setFilter(category);
  };

  const filterWork = (works) => {
    if (filter === "Все") {
      return works;
    }
    return works.filter((work) => {
      return work.stack && work.stack.includes(filter);
    });
  };

  return (
    <div className="home-page">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar
            categories={categories}
            changeCategory={changeCategory}
            activeCategory={filter}
          />
        </div>
        <div className="col-lg-9">
          <Carousel items={images} />
          <div className="row">
            <WorksList works={filterWork(works) || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const works = await getWorks();
  const categories = await getCategory();
  const images = works.map((w) => w.image).filter((w) => w);
  return {
    props: { works, categories, images },
  };
}

export default Home;
