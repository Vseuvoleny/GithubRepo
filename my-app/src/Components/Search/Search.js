import React from "react";
import { Form, Button, Container,Row } from "react-bootstrap";

export const Search = () => {
  return (
    <Container className='pt-5'>
      <Row className='justify-content-center'>
        <Form>
          <Form.Group controlId="formBasicText">
            <Form.Control type="text" placeholder="Enter something" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
