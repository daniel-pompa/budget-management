import PropTypes from 'prop-types';

const Alert = ({ children, type }) => {
  return <div className={`alert ${type}`}>{children}</div>;
};

Alert.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
