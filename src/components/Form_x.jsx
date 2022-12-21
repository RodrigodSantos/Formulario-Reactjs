import React, { useState } from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Form_x = () => {

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
  }



  return (
    <>
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
      </Form>
    </>
  )
}

export default Form_x;
