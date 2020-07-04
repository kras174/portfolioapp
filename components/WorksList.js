import React, { Component } from "react";
import Link from "next/link";
import { Card, CardImg, CardBody, CardFooter, Button } from "reactstrap";
import { useRouter } from "next/router";
import { deleteWork } from "../actions";

const WorksList = (props) => {
  const router = useRouter();
  const { isAuthenticated, isSiteOwner } = props.auth;

  const deleteWorkHandle = (id) => {
    deleteWork(id)
      .then(() => {
        // showAlert(`Проект успешно удалён!`, "danger");
        router.push("/portfolio");
      })
      .catch((err) => console.error(err));
  };

  const renderWorks = (works) => {
    return works.map((work, index) => (
      <div key={work._id} className="portfolio-item col-lg-4 col-md-12 mb-4">
        <Link href="/portfolio/[id]" as={`/portfolio/${work._id}`}>
          <a>
            <Card className="h-100">
              {work.image && (
                <CardImg
                  className="img img-fluid mx-auto grayscale"
                  top
                  width="100%"
                  src={work.image}
                  alt="Card image cap"
                />
              )}

              <CardBody>
                <h2>{work.title}</h2>
                <p>{work.description}</p>
                {work.stack
                  ? work.stack.map((item, index) => (
                      <span key={index} className="badge badge-info mr-1">
                        {item}
                      </span>
                    ))
                  : null}
              </CardBody>
              <CardFooter>
                <span className="badge badge-info badge-dark">
                  {work.releaseYear}
                </span>
              </CardFooter>
            </Card>
          </a>
        </Link>
        {isAuthenticated && isSiteOwner && (
          <div className="admin-buttons">
            <Button
              onClick={() => {
                router.push(
                  `/portfolio/[id]/edit`,
                  `/portfolio/${work._id}/edit`
                );
              }}
              className="btn btn-warning btn-sm mr-2"
              role="button"
            >
              Редактировать
            </Button>
            <Button
              onClick={() => {
                deleteWorkHandle(work._id);
              }}
              className="btn btn-danger btn-sm mr-2"
              role="button"
            >
              Удалить
            </Button>
          </div>
        )}
      </div>
    ));
  };

  const { works } = props;
  return <>{renderWorks(works)}</>;
};

export default WorksList;
