import { useRouter } from "next/router";
import { getWorkById } from "../../../actions";

const Work = (props) => {
  const router = useRouter();
  const { work } = props;

  const goBack = () => router.push("/portfolio");

  return (
    <div className="jumbotron mx-md-5 my-md-5 my-0">
      <button
        className="btn btn-outline-primary btn-sm mb-3"
        onClick={goBack}
        role="button"
      >
        Назад
      </button>
      <h1 className="display-5">{work.title}</h1>
      <p className="lead">{work.description}</p>
      <hr className="my-4" />
      <p>
        {work.stack &&
          work.stack.map((item, index) => (
            <span key={index} className="badge badge-info mr-1">
              {item}
            </span>
          ))}
      </p>
      <span className="badge badge-info badge-dark mb-4">
        {work.releaseYear}
      </span>
      {work.demoLink && (
        <div className="d-flex button-container">
          <div className="flex-grow-1">
            <a href={work.demoLink} target="_blank">
              <button className="btn btn-outline-success mr-2" role="button">
                Демо
              </button>
            </a>
          </div>
        </div>
      )}

      {work.preview && (
        <div className="preview-block">
          <hr className="my-4" />
          <div className="preview-imgs">
            {work.preview.map((prev, index) => (
              <img
                key={index}
                src={prev}
                alt={index}
                className="img img-fluid mx-auto my-2"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const work = await getWorkById(params.id);
  return {
    props: { work },
  };
}

export default Work;
