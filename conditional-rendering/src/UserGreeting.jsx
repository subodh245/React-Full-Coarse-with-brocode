import PropTypes from "prop-types";

function UserGreeting(props) {
  const welcomeMassage = (
    <h2 className="welcome-massage">Welcome{props.username}</h2>
  );

  const loginPrompt = <h2 className="login-prompt">Please log in continue </h2>;

  return props.isLoggedIn ? welcomeMassage : loginPrompt;
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
