import React from 'react';

const QuantityDropdown = ({ count, increment, decrement }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={decrement} style={{ marginRight: '10px' }}>
        ▼
      </button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={increment}>
        ▲
      </button>
    </div>
  );
};

export default QuantityDropdown;
