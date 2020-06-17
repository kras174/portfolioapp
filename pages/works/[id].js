import { useRouter } from "next/router";
import { getWorkById, deleteWork } from "../../actions";

const Work = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { work } = props;

  const deleteWorkHandle = (id) => {
    deleteWork(id).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{work.title}</h1>
        <p className="lead">{work.description}</p>
        <hr className="my-4" />
        <p>{work.stack}</p>
        <button className="btn btn-primary btn-lg mr-2" role="button">
          Демо
        </button>
        <button
          onClick={deleteWorkHandle}
          className="btn btn-danger btn-lg"
          role="button"
        >
          Удалить
        </button>
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
