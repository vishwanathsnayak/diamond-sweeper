import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ score, completed }) => (
    completed
        ? <h1>Congratulations! You found all diamonds! Your score is {score}!</h1>
        : <h1>Current score: {score}. Keep searching diamonds!</h1>
);

Message.propTypes = {
    score: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired
};

export default Message;