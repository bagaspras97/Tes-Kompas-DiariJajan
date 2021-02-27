import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const CustomModal = ({ handleClose, show, setShow }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const date_ob = new Date();
  const date = ('0' + date_ob.getDate()).slice(-2);
  const month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
  const year = date_ob.getFullYear();
  const hours = date_ob.getHours();
  const minutes = date_ob.getMinutes();
  const seconds = date_ob.getSeconds();

  // prints date & time in YYYY-MM-DD HH:MM:SS format
  const dateFormat = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  const convertNumber = parseInt(cost);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { id: uuidv4(), name, cost: convertNumber, created_at: dateFormat };
    console.log(item);
    fetch('  http://localhost:3000/items', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(item),
    }).then((res) => {
      setShow(!show);
      return res.json();
    });
  };
  return (
    <Modal show={show} size="sm" onHide={handleClose} backdrop="static" keyboard={false} centered>
      <Modal.Header className="border-bottom-0">
        <Modal.Title>Tambah Entri</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="modal-body">
          <Form.Group controlId="">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Makan apa hari ini?" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Harga</Form.Label>
            <Form.Control type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="border-top-0">
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" type="submit">
            Kirim
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CustomModal;
