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
      router.push("/portfolio");
    });
  };

  const goBack = () => router.push("/portfolio");

  return (
    <div className="jumbotron">
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
      <div className="d-flex button-container">
        <div className="flex-grow-1">
          <button className="btn btn-outline-success mr-2" role="button">
            Демо
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              router.push(`/portfolios/[id]/edit`, `/portfolios/${id}/edit`);
            }}
            className="btn btn-outline-warning btn-sm mr-2"
            role="button"
          >
            Редактировать
          </button>
          <button
            onClick={() => {
              deleteWorkHandle(id);
            }}
            className="btn btn-outline-danger btn-sm mr-2"
            role="button"
          >
            Удалить
          </button>
        </div>
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
