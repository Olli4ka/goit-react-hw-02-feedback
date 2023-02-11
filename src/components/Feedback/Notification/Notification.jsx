import PropTypes from 'prop-types';
import { NotificationMessage } from './Notificatiion.styled';

const Notification = () => {
   const message = 'There is no feedback'
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
