import { Component } from "react";
import auth from "../services/authService";

// user is redirected to homepage when signing out
class Logout extends Component {
    componentDidMount() {
        auth.logout();

        window.location = "/";
    }

    render() {
        return null;
    }
}

export default Logout;
