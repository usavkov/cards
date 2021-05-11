import { Row, Col } from "antd";
import { Typography } from "antd";
const { Title, Text } = Typography;

export const Error = ({ message }) => {
  return (
    <Row>
      <Col sm={12}>
        <Title level={2}>Ooops...</Title>
        <Text type="danger">{message}</Text>
      </Col>
    </Row>
  );
};
