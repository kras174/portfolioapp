import { useRouter } from "next/router";
import { getWorkById, deleteWork } from "../../../actions";

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
          onClick={() => {
            deleteWorkHandle(id);
          }}
          className="btn btn-danger btn-lg mr-2"
          role="button"
        >
          Удалить
        </button>
        <button
          onClick={() => {
            router.push(`/works/[id]/edit`, `/works/${id}/edit`);
          }}
          className="btn btn-warning btn-lg"
          role="button"
        >
          Редактировать
        </button>
      </div>
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
