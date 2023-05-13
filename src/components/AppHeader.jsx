import { Link } from "react-router-dom";
import "./AppHeader.css";
import { Heading, Text } from "@chakra-ui/react";

export default () => {
    return (
        <header className="app-header">
            <Heading as="h1" className="main-button"><Text className="d-scr">NS Task Manager</Text></Heading>

            <nav>
                <ul>
                    <Link className="nav-option" to="/">
                        <li>Home</li>
                        <span></span>
                    </Link>
                    <Link className="nav-option" to="/tasks">
                        <li>Tasks</li>
                        <span></span>
                    </Link>
                    <Link className="nav-option" to="/about_us">
                        <li>About us</li>
                        <span></span>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}