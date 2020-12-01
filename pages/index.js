import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";

const Home = (props) => {
  const { user = "" } = props.auth;

  return (
    <div className="home-page">
      <Container>
        <Row>
          <div className="title-container col-12 my-5">
            <h1>{`Привет ${user && user.name}`}</h1>
            {user && (
              <small>
                Я ещё не придумал какой секретный контент показать для тебя, но обязательно подумаю
                над этим.
              </small>
            )}
          </div>
          {/* <CarouselReact items={images} /> */}
          <div className="image-container col-sm-12 col-md-5 mb-5">
            <div className="image"/>
          </div>
          <div className="text-container col-sm-12 col-md-7 mb-5">
            <p>
              Меня зовут <strong>Антон</strong>, и я ВЕБ-разработчик.
            </p>
            <p>
              Прекрасно знаю что такое HTML, CSS, JavaScript, JQuery, и какую красоту с помощью
              этого всего можно сделать =)
            </p>
            <p>
              Специализируюсь на разработке ВЕБ-приложений с использованием таких фреймворков как{" "}
              <strong>
                <Typed
                  strings={["React.", "Redux.", "Next JS.", "MobX.", "Vue", "VueX", "TypeScript", "Ку-ку", "Здесь может быть ваша реклама =))"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </strong>
            </p>
            <div className="social-container">
              <p>Будем на связи:</p>
              <a href="https://vk.com/id238622" target="_blank">
                <img src="/images/socials/vk.png" alt="vk" />
              </a>
              <a href="https://t.me/kras174" target="_blank">
                <img src="/images/socials/telegram.png" alt="telegram" />
              </a>
              <a href="https://wa.me/79823216648" target="_blank">
                <img src="/images/socials/whatsapp.png" alt="whatsapp" />
              </a>
              <a href="Skype:kras85?chat" target="_blank">
                <img src="/images/socials/skype.png" alt="skype" />
              </a>
              <a href="https://github.com/kras174" target="_blank">
                <img src="/images/socials/github.png" alt="github" />
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
8;
