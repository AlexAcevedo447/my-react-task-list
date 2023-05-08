import { Link } from "react-router-dom";
import "./AppHeader.css";

export default () => {
    return (
        <header className="app-header">
            <h1 className="main-button dancing-script">NS Task Manager</h1>

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