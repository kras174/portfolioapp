import React, { Component } from "react";
import CreateForm from "../../../components/CreateForm";
import { getWorkById, updateWork } from "../../../actions";
import Router from "next/router";
import withAuth from "../../../components/hoc/withAuth";

class EditWork extends Component {
  handleUpdateWork = (work) => {
    updateWork(work)
      .then(() => {
        Router.push(`/portfolio`, `/portfolio`);
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { work } = this.props;
    return (
      <div className="my-5 mx-5">
        <h1>Редактор проекта</h1>
        <CreateForm
          initialData={work}
          handleSaveForm={this.handleUpdateWork}
          submitButtonText="Обновить"
          workId={this.props.id}
        />
      </div>
    );
  }
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const work = await getWorkById(id);
  return {
    props: { work },
  };
}

export default withAuth(EditWork, "siteOwner");
