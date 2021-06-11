import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import Head_meta from "../Head_meta";

const BaseLayout = (props) => {
  return (
    <div>
      <Head_meta />
      <div>{props.children}</div>
    </div>
  );
};

export default BaseLayout;
