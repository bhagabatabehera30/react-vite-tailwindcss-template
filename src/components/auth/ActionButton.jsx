import React from 'react';
import PropTypes from 'prop-types';
const ActionButton = ({ btn_type, classAttr, ide, btnName}) => {
    return (
        <button
            type={btn_type}
            className={classAttr}
            id={ide}
        >
            {btnName}
        </button>
    );
}
ActionButton.propTypes = {
  btn_type: PropTypes.string.isRequired,
  classAttr: PropTypes.string.isRequired,
  ide: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
};

ActionButton.defaultProps = {
  btn_type: 'button',
  classAttr: 'w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4',
  ide: 'login',
  btnName: 'Sign in',
};

export default ActionButton;