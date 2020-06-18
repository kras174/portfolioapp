import React, { Component } from "react";
import Link from "next/link";

class WorksList extends Component {
  renderWorks(works) {
    return works.map((work) => (
      <div key={work.id} className="col-lg-4 col-md-6 mb-4">
        <Link href="/works/[id]" as={`/works/${work.id}`}>
          <div className="card h-100">
            <img className="img img-fluid mx-auto" src={work.image} alt="" />

            <div className="card-body">
              <h4 className="card-title">{work.title}</h4>
              <div className="card-body">
                <p className="card-text">{work.description}</p>
              </div>
              {work.stack.map((item, index) => (
                <span key={index} className="badge badge-info">
                  {item}
                </span>
              ))}
            </div>
            <div className="card-footer">
              <span className="badge badge-pill badge-dark">
                {work.releaseYear}
              </span>
            </div>
          </div>
        </Link>
        <style jsx>{`
          .card {
            cursor: pointer;
            overflow: hidden;
            transition: all 0.3s ease-out;
          }
          .card:hover {
            transform: scale(1.1);
          }
        `}</style>
      </div>
    ));
  }

  render() {
    const { works } = this.props;
    return <>{this.renderWorks(works)}</>;
  }
}

export default WorksList;
