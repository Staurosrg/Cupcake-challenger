import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


const ResponsiveForm = () => {
 return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Form>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group controlId="formGridLastName">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group controlId="formGridPhone">
              <Form.Label>Phone*</Form.Label>
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                 <option>Choose...</option>
                 <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridCountry">
              <Form.Label>Country*</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
 );
};

export default ResponsiveForm;