import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ListItem = ({ hour, name, cost }) => {
  const newHour = hour.endsWith(':') ? hour.slice(0, 4) : hour;
  return (
    <>
      <ListGroup.Item className="list-item border-start-0 border-end-0">
        <p className="hour">{newHour}</p>
        <p className="item-name">{name}</p>
        <p className="cost">Rp {cost}</p>
      </ListGroup.Item>
    </>
  );
};

export default ListItem;
