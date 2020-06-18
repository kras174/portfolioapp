const Carousel = (props) => {
  const { items } = props;
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mb-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {items.map((item, index) => (
          <li
            key={item}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner" role="listbox">
        {items.map((item, index) => (
          <div
            key={item}
            className={`carousel-item ${index === 1 ? "active" : ""}`}
          >
            <img className="d-block img-fluid grayscale" src={item} alt="" />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <style jsx>{`
        .carousel-item {
          max-height: 370px;
        }
        .grayscale {
          filter: grayscale(100%);
          transition: 1s;
        }
        .carousel:hover .grayscale {
          filter: grayscale(0);
        }
      `}</style>
    </div>
  );
};

export default Carousel;
