import React from 'react';
import PropTypes from 'prop-types';

export default function CheckpointBody({ children }) {
  if (!children) {
    return null;
  }

  return (
    <div className="pgn__checkpoint-body text-gray-700 mb-3.5">
      {children}
    </div>
  );
}

CheckpointBody.defaultProps = {
  children: null,
};

CheckpointBody.propTypes = {
  children: PropTypes.node,
};
