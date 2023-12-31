import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function GenericLink(props) {
  const { to, dataTestId, className, title, onClick } = props;
  return (
    <Link
      to={ to }
      data-testid={ dataTestId }
      onClick={ onClick }
      className={ className }
    >
      { title }
    </Link>
  );
}

GenericLink.defaultProps = {
  to: '/',
  dataTestId: '',
  className: '',
  title: '',
  onClick: () => {},
};

GenericLink.propTypes = {
  to: PropTypes.string,
  dataTestId: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.node,
  onClick: PropTypes.func,
};
