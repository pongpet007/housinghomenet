import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const YellowBreadcrumb = (props) => {
  return (
    <div
      className="breadcrumb-bar"
      style={{ background: "#FFC857", marginBottom: 30, padding: "10px 0" }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <Breadcrumb>
              {props.data &&
                props.data.map((item, idx) => {
                  return (
                    <Breadcrumb.Item
                      key={idx}
                      href={item.url ? item.url : "#"}
                      active={item.active}
                    >
                      {item.name}
                    </Breadcrumb.Item>
                  );
                })}
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default YellowBreadcrumb;
