import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Buscador = () => {

  const [nome, setNome] = useState("");

  const handleChangeNome = (event) => {
    const inputNome = event.target.value;
    setNome(inputNome);
  }
    
  return (
    <>
      <Row className="justify-content-md-center">
        <Col lg="3">
          <h1>
          Buscar Clientes
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="3">
          <Form>
            <Form.Group as={Row} className="mb-5">
              <Form.Control type="text" placeholder="Nome" onChange={handleChangeNome}/> 
            </Form.Group>
          </Form>
        </Col >
        <Col xs lg="1">
          <Button type="submit">Buscar</Button>
        </Col>
      </Row>
    </>
  )
}

export default Buscador;