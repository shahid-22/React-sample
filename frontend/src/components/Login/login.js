import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
function Login() {
  return (
    <Container>
      <Row>
        <Col lg={6} md={12}>
          <div className="register">
            <div className="col-1">
              <h2 style={{color:"black" ,fontStyle:"italic"}}>Login</h2>
              <span></span>

              <Form id="form" className="flex flex-col">
                <Form.Control type="text" placeholder="e-mail" />
                <Form.Control type="password" placeholder="password" />
                <Button className="btn" variant="primary" type="submit">
                  LOGIN
                </Button>
                <Button className="btn" variant="primary" type="submit">
                  Sign In
                </Button>
              </Form>
            </div>
            <div className="col-2">
              <img
                src="https://m.media-amazon.com/images/I/71oGke7wycL._SX522_.jpg"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login

