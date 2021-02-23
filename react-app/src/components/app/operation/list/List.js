import React from 'react';
import { useSelector } from 'react-redux';
import { OperationItem } from '../item/Item';
import './List.scss';

export const OperationList = ({ items }) => {
  const { categories } = useSelector((state) => state.operation);

  return (
    <div
      className={'operation-list' + (!items.length ? ' operation-list__empty' : '')}
    >
      {items.length ? (
        items.map((operation) => (
          <OperationItem
            key={operation.id}
            item={{
              ...operation,
              category: categories.find(
                (category) => category.id === operation.categoryId
              ),
            }}
          />
        ))
      ) : (
        <span>Oops... No hay transacciones :'(</span>
      )}
    </div>
  );
};
