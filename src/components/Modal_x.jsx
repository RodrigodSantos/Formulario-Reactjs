import React, { useEffect, useState } from 'react'
// import Form_x from './Form_x';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


const Modal_x = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3022/clientes", {})
    .then((response) => response.json())
    .then((data) => setClientes(data))
  },[])

  //Form_x ---------------------

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cep, setCep] = useState("");

  const handleChangeNome = (event) => {
    const inputNome = event.target.value;
    setNome(inputNome);
  }

  const handleChangeEmail = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  }

  const handleChangeNasc = (event) => {
    const inputNasc = event.target.value;
    setNascimento(inputNasc);
  }

  const handleChangeCep = (event) => {
    const inputCep = event.target.value;
    setCep(inputCep);
  }

  const handleClickLimpar = () => {
    
  }

  const handleClickCadastrar = () => {

    const cliente = {
      "nome": nome,
      "email": email,
      "nascimento": nascimento,
      "cep": cep
    }

    fetch("http://localhost:3022/clientes", {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {"Content-Type": "application/json"}
    })
    setShow(false);
    console.log(cliente);
  }

  //Form_x ---------------------

  return (
    <>
      <Row className="justify-content-md-center">
        <Col lg="2">
          <h4>Adicionar Clientes</h4>
        </Col>
        <Col lg="1">
          <Button className="mb-1" variant="primary" onClick={handleShow}>
            +
          </Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Nome
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Informe seu nome" onChange={handleChangeNome}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Informe seu email" onChange={handleChangeEmail}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Nasc.
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Sua data de nascimento" onChange={handleChangeNasc}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            CEP
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Informe seu CEP" onChange={handleChangeCep}/>
          </Col>
        </Form.Group>
        <Modal.Footer>
          <Button variant="danger" type='reset' onClick={handleClickLimpar}>Limpar</Button>
          <Button variant="primary" onClick={handleClickCadastrar}>Cadastrar</Button>
        </Modal.Footer>
      </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Modal_x;