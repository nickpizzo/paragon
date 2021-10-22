import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigation';

const Menu = ({
  as,
  arrowKeyNavigationSelector,
  children,
  ...props
}) => {
  const parentRef = useArrowKeyNavigation({ selectors: arrowKeyNavigationSelector });
  const className = classNames(props.className, 'pgn__menu');

  return React.createElement(
    as,
    {
      ...props,
      ref: parentRef,
      className,
    },
    (
      <>
        {children}
      </>
    ),
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  arrowKeyNavigationSelector: PropTypes.string,
  as: PropTypes.elementType,
  children: PropTypes.node,
};

Menu.defaultProps = {
  className: undefined,
  arrowKeyNavigationSelector: 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
  as: 'div',
  children: null,
};

export default Menu;