import React from 'react';
import { useSelector } from 'react-redux';
import { OperationItem } from '../item/Item';

export const OperationList = ({ items }) => {
  const { categories } = useSelector((state) => state.operation);

  return (
    <div className="operation-list">
      {items.map((operation) => (
        <OperationItem
          key={operation.id}
          item={{
            ...operation,
            category: categories.find(
              (category) => category.id === operation.categoryId
            ),
          }}
        />
      ))}
    </div>
  );
};
