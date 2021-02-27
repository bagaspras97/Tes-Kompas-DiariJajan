import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

import Header from './components/Header';
import ListData from './components/ListData';
import CustomModal from './components/CustomModal';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const sum = (arr) => {
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue);
  };

  const formatCost = (value) => {
    //ubah sting menjadi array dan membalikkan nilai
    let convertTCost = value.toString().split('').reverse().join('');
    // menambahkan titik setiap 3 nilai
    convertTCost = convertTCost.match(/\d{1,3}/g);
    // mengubah kembali array menjadi string
    convertTCost = convertTCost.join('.').split('').reverse().join('');

    return convertTCost;
  };

  const byDate = (a, b) => {
    //chronologically by year, month, then day
    return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf(); //timestamps
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/items');
        data.sort(byDate);
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [data]);

  return (
    <div className="App">
      <Container>
        {data && (
          <div className="header-container">
            <Header data={data} sum={sum} formatCost={formatCost} />
            <Button variant="primary" onClick={handleShow}>
              TAMBAH ITEM
            </Button>
          </div>
        )}
        {data && <ListData data={data} sum={sum} formatCost={formatCost} />}
      </Container>
      <CustomModal handleClose={handleClose} show={show} setShow={setShow} />
    </div>
  );
}

export default App;
