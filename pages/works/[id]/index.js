import { useRouter } from "next/router";
import { getWorkById, deleteWork } from "../../../actions";

import AlertContext from "../../../context/AlertContext";
import { useContext } from "react";

const Work = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { work } = props;

  const { showAlert } = useContext(AlertContext);

  const deleteWorkHandle = (id) => {
    deleteWork(id).then(() => {
      showAlert(`Проект успешно удалён!`, "danger");
      router.push("/");
    });
  };

  return (
    <div className="jumbotron">
      <h1 className="display-4">{work.title}</h1>
      <p className="lead">{work.description}</p>
      <hr className="my-4" />
      <p>
        {work.stack.map((item, index) => (
          <span key={index} className="badge badge-info">
            {item}
          </span>
        ))}
      </p>
      <button className="btn btn-success btn-lg mr-2" role="button">
        Демо
      </button>
      <button
        onClick={() => {
          router.push(`/works/[id]/edit`, `/works/${id}/edit`);
        }}
        className="btn btn-warning btn-lg mr-2"
        role="button"
      >
        Редактировать
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
