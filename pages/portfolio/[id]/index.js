import { useRouter } from "next/router";
import { getWorkById } from "../../../actions";

const Work = (props) => {
  const router = useRouter();
  const { work } = props;

  const goBack = () => router.push("/portfolio");

  return (
    <div className="jumbotron mx-5 my-5">
      <button
        className="btn btn-outline-primary btn-sm mb-3"
        onClick={goBack}
        role="button"
      >
        Назад
      </button>
      <h1 className="display-4">{work.title}</h1>
      <p className="lead">{work.description}</p>
      <hr className="my-4" />
      <p>
        {work.stack
          ? work.stack.map((item, index) => (
              <span key={index} className="badge badge-info">
                {item}
              </span>
            ))
          : null}
      </p>
      <span className="badge badge-pill badge-dark mb-4">
        {work.releaseYear}
      </span>
      {/* <div className="d-flex button-container">
        <div className="flex-grow-1">
          <button className="btn btn-outline-success mr-2" role="button">
            Демо
          </button>
        </div>
      </div> */}
      {work.preview && (
        <>
          <hr className="my-4" />
          <div className="preview-imgs">
            <img
              src={work.preview}
              alt={work.title}
              className="img img-fluid mx-auto"
            />
          </div>
        </>
      )}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const work = await getWorkById(id);
  return {
    props: { work },
  };
}

export default Work;
