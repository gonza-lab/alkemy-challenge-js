import React from 'react';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';
import 'moment/locale/es';
import './Item.scss';
moment.locale('es');

export const OperationItem = ({ item }) => {
  return (
    <div className="operation-item">
      <div className="operation-item__concept">{item.concept}</div>
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
            <button>Editar</button>
            <button>Eliminar</button>
          </div>
        </ReactTooltip>
      </div>
    </div>
  );
};
