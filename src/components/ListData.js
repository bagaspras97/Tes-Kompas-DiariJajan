import React from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';

import ListItem from './ListItem';
const ListData = ({ data, formatCost }) => {
  const newArr = data.map((i) => {
    return i.created_at.slice(0, 10);
  });
  console.log('data', data);
  console.log('new', newArr);
  return (
    <Row>
      {data.map((d) => (
        <Col sm={6} md={4} lg={3} className="column" key={d.id}>
          <div className="list-container">
            <ListGroup>
              <h5>{d.created_at.slice(8, 10)} Februari</h5>
              <ListItem name={d.name} cost={formatCost(d.cost)} hour={d.created_at.slice(11, 16)} />
              <div className="total-container">
                <div></div>
                <p className="total">Total</p>
                <p className="total-jajan">Rp {formatCost(d.cost)}</p>
              </div>
            </ListGroup>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ListData;
