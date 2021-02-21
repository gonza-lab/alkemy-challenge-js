import React from 'react';
import { OperationItem } from '../item/Item';

export const OperationList = ({ items }) => {
  return (
    <div className="operation-list">
      {items.map((operation) => (
        <OperationItem key={operation.id} item={operation} />
      ))}
    </div>
  );
};
