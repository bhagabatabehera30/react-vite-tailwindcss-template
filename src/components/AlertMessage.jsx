import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AlertMessage = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  const getTypeClass = (type) => {
    switch (type) {
      case 'gray':
        return { backgroundColor: '#ededed', color: '#5d5d5d' };
      case 'yellow':
        return { backgroundColor: '#fff2b2', color: '#7c620c' };
      case 'orange':
        return { backgroundColor: '#ffe6d3', color: '#ff892f' };
      case 'red':
        return { backgroundColor: '#fad2e1', color: '#7c193d' };
      case 'green':
        return { backgroundColor: '#98f5e1', color: '#236c5b' };
      case 'blue':
        return { backgroundColor: '#caf0f8', color: '#03045e' };
      case 'black':
        return { backgroundColor: '#313131', color: '#e2e2e2' };
      default:
        return { backgroundColor: '#ededed', color: '#5d5d5d' };
    }
  };

  const d = new Date();
  const iDe = 'alert_' + d.getTime();
  const style = getTypeClass(type);

  return (
    <div
      id={iDe}
      style={style}
      className="flex justify-between py-4 px-8 rounded-md items-center"
    >
      <p className="font-sans">{message}</p>
      <button
        className="font-bold alert-del text-xl ml-4"
        onClick={handleClose}
        aria-label="Close alert"
      >
        &times;
      </button>
    </div>
  );
};

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClose: PropTypes.func,
};

AlertMessage.defaultProps = {
  type: 'gray',
  onClose: null,
};

export default AlertMessage;
