import React from 'react';
import { useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import operation from '../../../../redux/operation/actions';
import 'moment/locale/es';
import './Item.scss';
moment.locale('es');

export const OperationItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="operation-item">
      <div className="operation-item__concept">
        <span>{item.concept}</span>
        {Boolean(item.category) && (
          <span className="operation-item__concept-category">
            {item.category.name}
          </span>
        )}
      </div>
      <div className="operation-item__amount">
        <span>${item.amount}</span>
        <span>{moment(item.date).calendar()}</span>
      </div>
      <div className="operation-item__actions">
        <button
          data-tip
          data-for={`actions-${item.id}`}
          data-event="click"
          data-event-off="blur"
        >
          <i className="fas fa-ellipsis-v"></i>
        </button>
        <ReactTooltip
          backgroundColor="transparent"
          clickable
          id={`actions-${item.id}`}
          className="operation-item__tooltip-wrapper"
        >
          <div className="operation-item__tooltip">
            <button
              onClick={() => dispatch(operation.startDeleteOperation(item))}
            >
              Eliminar
            </button>
            <button onClick={() => dispatch(operation.changeModeUp(item))}>
              Editar
            </button>
          </div>
        </ReactTooltip>
      </div>
    </div>
  );
};
