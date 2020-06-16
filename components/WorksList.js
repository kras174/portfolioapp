import React, { Component } from "react";
import Link from "next/link";

class WorksList extends Component {
  renderWorks(works) {
    return works.map((work) => (
      <div key={work.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link href="/works/[id]" as={`/works/${work.id}`}>
            <a>
              <img className="card-img-top img-fluid" src={work.image} alt="" />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/works/[id]" as={`/works/${work.id}`}>
                <a href="#">{work.title}</a>
              </Link>
            </h4>
            <h5>{work.stack}</h5>
            <p className="card-text">{work.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{work.releaseYear}</small>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const { works } = this.props;
    return <>{this.renderWorks(works)}</>;
  }
}

export default WorksList;
