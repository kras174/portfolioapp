import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import WorksList from "../components/WorksList";
import AlertContext from "../context/AlertContext";
import { useContext } from "react";
import { getWorks, getCategory } from "../actions";

const Home = (props) => {
  const { works = [], categories = [], images = [] } = props;
  const { showAlert } = useContext(AlertContext);

  return (
    <div className="home-page">
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
