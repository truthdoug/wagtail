import PropTypes from 'prop-types';
import React from 'react';

const handleClick = (href, onClick, preventDefault, navigate, e) => {
  if (preventDefault && href === '#') {
    e.preventDefault();
    e.stopPropagation();
  }

  if (onClick) {
    onClick(e);
  }

  // If a navigate hander has been specified, replace the default behaviour
  if (navigate && !e.defaultPrevented) {
    e.preventDefault();
    navigate(href);
  }
};

/**
 * A reusable button. Uses a <a> tag underneath.
 */
const Button = ({
  className,
  children,
  accessibleLabel,
  href,
  target,
  preventDefault,
  onClick,
  dialogTrigger,
  navigate,
}) => {
  const hasText = children !== null;
  const accessibleElt = accessibleLabel ? (
    <span className="visuallyhidden">
      {accessibleLabel}
    </span>
  ) : null;

  return (
    <a
      className={className}
      onClick={handleClick.bind(null, href, onClick, preventDefault, navigate)}
      rel={target === '_blank' ? 'noopener noreferrer' : null}
      href={href}
      target={target}
      aria-haspopup={dialogTrigger ? 'dialog' : null}
    >
      {hasText ? children : accessibleElt}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
  accessibleLabel: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  preventDefault: PropTypes.bool,
  dialogTrigger: PropTypes.bool,
  navigate: PropTypes.func,
};

Button.defaultProps = {
  href: '#',
  className: '',
  target: null,
  children: null,
  accessibleLabel: null,
  onClick: null,
  isLoading: false,
  preventDefault: true,
  dialogTrigger: false,
  navigate: null,
};

export default Button;
