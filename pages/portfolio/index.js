import { getWorks, getCategory, createWork } from "../../actions";
import React, { useState, useContext } from "react";
import { Button } from "reactstrap";
import { useRouter } from "next/router";

import WorksList from "../../components/WorksList";
import ModalReact from "../../components/UI/Modal";
import CreateForm from "../../components/CreateForm";

import AlertContext from "../../context/AlertContext";

const Portfolio = (props) => {
  const { works = [], categories = [], images = [] } = props;
  const [filter, setFilter] = useState("Все");
  const { isAuthenticated, isSiteOwner } = props.auth;

  const router = useRouter();

  const { showAlert } = useContext(AlertContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleHandle = () => setIsOpen(!isOpen);

  const createWorkHandle = (newWork) => {
    createWork(newWork)
      .then((works) => {
        toggleHandle();
        showAlert(`Проект ${newWork.title} успешно добавлен!`, "success");
        router.push("/portfolio");
      })
      .catch((err) => console.error(err));
  };

  const changeCategory = (category) => {
    setFilter(category);
  };

  const filterWork = (works) => {
    if (filter === "Все") {
      return works;
    }
    return works.filter((work) => {
      return work.stack && work.stack.includes(filter);
    });
  };

  return (
    <div className="portfolio-page mx-sm-3 mx-md-5 my-5">
      <h1>Портфолио</h1>
      <div className="portfolio-filter col-12 my-3">
        <div className="multi-button">
          {categories.map((c) => (
            <Button
              key={c.id}
              className={`${filter === c.name ? "active" : ""}`}
              onClick={() => changeCategory(c.name)}
            >
              {c.name}
            </Button>
          ))}
        </div>
        <hr />
      </div>
      <div className="portfolio-list col-12">
        <div className="row">
          <WorksList auth={props.auth} works={filterWork(works) || []} />
        </div>
        {isAuthenticated && isSiteOwner && (
          <>
            <hr />
            <ModalReact
              isOpen={isOpen}
              toggle={toggleHandle}
              buttonLabel="Добавить проект"
              className="modalReact"
            >
              <CreateForm
                categories={categories}
                handleSaveForm={createWorkHandle}
              />
            </ModalReact>
          </>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const works = await getWorks();
  const categories = await getCategory();
  const images = works.map((w) => w.image).filter((w) => w);
  return {
    props: { works, categories, images },
  };
}

export default Portfolio;
