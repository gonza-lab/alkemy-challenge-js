import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AppCard } from '../card/Card';
import { OperationList } from './list/List';
import './Operation.scss';

export const AppOperation = ({ title, out }) => {
  const { list } = useSelector((state) => state.operation);
  const operations = useMemo(() => {
    return list.filter((operation) =>
      !out ? operation.amount > 0 : operation.amount < 0
    );
  }, [list]);

  return (
    <div className="app-operation__container">
      <AppCard className="app-operation">
        <div className="app-operation__title">
          <h1>{title}</h1>
        </div>
        <OperationList items={operations} />
      </AppCard>
    </div>
  );
};
