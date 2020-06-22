import React, { Component } from "react";
import Link from "next/link";
import { Card, CardImg, CardBody, CardFooter } from "reactstrap";

class WorksList extends Component {
  renderWorks(works) {
    return works.map((work) => (
      <div key={work.id} className="portfolio-item col-lg-4 col-md-12 mb-4">
        <Link href="/works/[id]" as={`/works/${work.id}`}>
          <a>
            <Card className="h-100">
              <CardImg
                className="img img-fluid mx-auto grayscale"
                top
                width="100%"
                src={work.image}
                alt="Card image cap"
              />

              <CardBody>
                <h2>{work.title}</h2>
                <p>{work.description}</p>
                {work.stack
                  ? work.stack.map((item, index) => (
                      <span key={index} className="badge badge-info">
                        {item}
                      </span>
                    ))
                  : null}
              </CardBody>
              <CardFooter>
                <span className="badge badge-pill badge-dark">
                  {work.releaseYear}
                </span>
              </CardFooter>
            </Card>
          </a>
        </Link>
      </div>
    ));
  }

  render() {
    const { works } = this.props;
    return <>{this.renderWorks(works)}</>;
  }
}

export default WorksList;
