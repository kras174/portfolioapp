import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import WorksList from "../components/WorksList";

import { getWorks, getCategory } from "../actions";
import { useState, useEffect } from "react";

const Home = (props) => {
  const { works = [], categories = [] } = props;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const { works } = props;
    const images = works.map((w) => w.image);
    setImages(images);
  }, []);

  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar categories={categories} />
            </div>
            <div className="col-lg-9">
              <Carousel items={images} />
              <div className="row">
                <WorksList works={works} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const works = await getWorks();
  const categories = await getCategory();
  return {
    props: { works, categories },
  };
}

export default Home;
