import { useRouter } from "next/router";
import Modal from "./Modal";
import CreateForm from "./CreateForm";
import { createWork } from "../actions";

const SideBar = (props) => {
  const { categories } = props;
  let modal = null;
  const router = useRouter();

  const handleCreateWork = (newWork) => {
    createWork(newWork).then((works) => {
      modal.closeModal();
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
