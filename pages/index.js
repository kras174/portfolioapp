// import CarouselReact from "../components/Carousel";
// import { getWorks, getCategory } from "../actions";
import { Container, Row } from "reactstrap";

const Home = (props) => {
  const { user = "" } = props.auth;
  // const { images = [] } = props;

  return (
    <div className="home-page">
      <Container>
        <Row>
          <h1 className="col-12 my-5">{`Привет ${user && user.name}`}</h1>
          {/* <CarouselReact items={images} /> */}
          <div className="image-container col-6 mb-4">
            <img src="/images/ava.jpg" alt="avatar" />
          </div>
          <div className="text-container col-6">
            <p>Меня зовут Антон Красильников, и я ВЕБ-разработчик.</p>
            <p>
              Прекрасно знаю что такое HTML, CSS, JavaScript, JQuery, и какую
              красоту с помощью этого всего можно сделать =){" "}
            </p>
            <p>
              Специализируюсь на разработке ВЕБ-приложений с использованием
              таких фреймворков как React, Redux, Next JS.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

// export async function getServerSideProps() {
//   const works = await getWorks();
//   const images = works.map((w) => w.image).filter((w) => w);
//   return {
//     props: { images },
//   };
// }

export default Home;
