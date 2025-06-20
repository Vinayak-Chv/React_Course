import propTypes from "prop-types"
import PropTypes from "prop-types"

function UserGreeting(props) {
    // if(props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    
    // else {
    //     return <h2>Pls Login to Continue</h2>
    // }

    // Ternery Operator
    const welcomeMsg = <h2 className="welcome">Welcome {props.username}</h2>
    const errorMsg = <h2 className="error">Pls Login to Continue</h2>

    return (props.isLoggedIn ? welcomeMsg : errorMsg)
}

UserGreeting.prototype = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting