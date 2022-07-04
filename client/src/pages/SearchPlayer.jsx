import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import FormSelect from "react-bootstrap/esm/FormSelect";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function SearchPlayer({ isSubmitted }) {
  const [inputs, setInputs] = useState({
    keyboard: "",
    searchBy: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1 className="mb-3">Search Player</h1>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="inputKeyword"
              label="Keyboard"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter Keyword"
                name="keyword"
                value={inputs.keyword}
                onChange={handleInputChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputSearchBy"
              label="Search by"
              className="mb-3"
            >
              <FormSelect
                aria-label="Select search category"
                name="seacrhBy"
                onChange={handleInputChange}
              >
                <option value="">Select options</option>
                <option value="username">Username</option>
                <option value="email">Email</option>
                <option value="experience">Exp. points</option>
                <option value="level">Level</option>
              </FormSelect>
            </FloatingLabel>

            <Button variant="primary" type="submit" className="btn-lg mb-5">
              Submit
            </Button>
          </Form>
          {submitted && (
            <Card>
              <ListGroup variant="flush">
                {Object.entries(inputs).map((input) => (
                  <ListGroupItem key={input[0]}>
                    <span className="fw-bold">{input[0]}:</span>
                    <span className="fst-italic">{input[1]}</span>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SearchPlayer;
