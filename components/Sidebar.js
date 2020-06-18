import { useRouter } from "next/router";
import Modal from "./Modal";
import CreateForm from "./CreateForm";
import { createWork } from "../actions";

import AlertContext from "../context/AlertContext";
import { useContext } from "react";

//TODO: Сбрасывать данные формы после добавления проекта

const SideBar = (props) => {
  const { categories } = props;
  let modal = null;
  const router = useRouter();

  const { showAlert } = useContext(AlertContext);

  const handleCreateWork = (newWork) => {
    createWork(newWork).then((works) => {
      modal.closeModal();
      showAlert(`Проект ${newWork.title} успешно добавлен!`, "success");
      router.push("/");
    });
  };

  return (
    <div>
      <Modal ref={(el) => (modal = el)}>
        <CreateForm handleSaveForm={handleCreateWork} />
      </Modal>
      <h1 className="my-4">Стэк</h1>
      <div className="list-group">
        {categories.map((c) => (
          <a key={c.id} href="#" className="list-group-item">
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
