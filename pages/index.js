import CarouselReact from "../components/Carousel";
import { getWorks, getCategory } from "../actions";

const Home = (props) => {
  const { user } = props.auth;
  const { images = [] } = props;

  return (
    <div className="home-page">
      <h1>{`Добро пожаловать ${user && user.name}`}</h1>
      <CarouselReact items={images} />
    </div>
  );
};

export async function getServerSideProps() {
  const works = await getWorks();
  const images = works.map((w) => w.image).filter((w) => w);
  return {
    props: { images },
  };
}

export default Home;
