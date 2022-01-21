import React from 'react';
import PropTypes from 'prop-types';

export default function CheckpointBreadcrumbs({ currentIndex, totalCheckpoints }) {
  if (totalCheckpoints === 1) {
    return null;
  }
  return (
    <span className="d-flex align-items-center" aria-hidden focusable={false}>
      {new Array(totalCheckpoints).fill(0).map((v, i) => (
        i === currentIndex ? <span className="pgn__checkpoint-breadcrumb rounded-circle bg-primary" data-testid="pgn__checkpoint-breadcrumb_active" />
          : <span className="pgn__checkpoint-breadcrumb rounded-circle border border-primary" data-testid="pgn__checkpoint-breadcrumb_inactive" />
      ))}
    </span>
  );
}

CheckpointBreadcrumbs.defaultProps = {
  currentIndex: null,
  totalCheckpoints: null,
};

CheckpointBreadcrumbs.propTypes = {
  currentIndex: PropTypes.number,
  totalCheckpoints: PropTypes.number,
};
