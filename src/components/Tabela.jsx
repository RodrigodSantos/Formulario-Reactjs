import React from 'react'
import { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';

const Tabela = () => {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3022/clientes", {})
    .then((response) => response.json())
    .then((data) => setClientes(data))
  }, [])

  return (
    <>
    <br />
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Nascimento</th>
          <th>CEP</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => { return <tr>
          <td>{cliente.id}</td>
          <td>{cliente.nome}</td>
          <td>{cliente.email}</td>
          <td>{cliente.nascimento}</td>
          <td>{cliente.cep}</td>
        </tr> })}
      </tbody>
    </Table>

    </>
  )
}

export default Tabela;