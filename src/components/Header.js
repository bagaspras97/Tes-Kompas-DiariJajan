import React from 'react';

const Header = ({ data, sum, formatCost }) => {
  const costs = data.map((d) => {
    return d.cost;
  });
  const totalCost = sum(costs);

  return (
    <div className="header">
      <h2>Diari Jajan Februari 2021</h2>
      <h5>Pengeluaran Bulan ini Rp {formatCost(totalCost)}</h5>
    </div>
  );
};

export default Header;
