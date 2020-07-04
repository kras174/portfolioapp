import { Row, Col } from "reactstrap";

const Cv = () => (
  <Col
    md={{ size: 8, offset: 2 }}
    sm={{ size: 10, offset: 1 }}
    className="my-md-5"
  >
    <iframe
      style={{ width: "100%", height: "700px" }}
      src="/akrasilnikov.pdf"
    />
  </Col>
);

export default Cv;
