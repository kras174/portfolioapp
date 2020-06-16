import { useRouter } from "next/router";
import { getWorkById } from "../../actions";

const Work = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { work } = props;
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{work.title}</h1>
        <p className="lead">{work.description}</p>
        <hr className="my-4" />
        <p>{work.stack}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Демо
        </a>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const work = await getWorkById(id);
  return {
    props: { work },
  };
}

export default Work;
