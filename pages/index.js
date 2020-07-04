// import CarouselReact from "../components/Carousel";
// import { getWorks, getCategory } from "../actions";
import { Container, Row, Col } from "reactstrap";

const Home = (props) => {
  const { user = "" } = props.auth;
  // const { images = [] } = props;

  return (
    <div className="home-page">
      <Container>
        <Row>
          <div className="title-container col-12 my-5">
            <h1>{`Привет ${user && user.name}`}</h1>
            {user && (
              <small>
                Я ещё не придумал какой секретный контент показать для тебя, но
                обязательно подумаю над этим.
              </small>
            )}
          </div>
          {/* <CarouselReact items={images} /> */}
          <div className="image-container col-sm-12 col-md-4 mb-5">
            <img src="/images/ava.jpg" alt="avatar" />
          </div>
          <div className="text-container col-sm-12 col-md-8 mb-5">
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
