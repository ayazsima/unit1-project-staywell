import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="app-container">
            <h1>StayWell</h1>
            <div>
                <Link to="/">Home   </Link>
                <Link to="/about">About    </Link>
                <Link to="/saved-plan">Saved Plan</Link>
            </div>
        </header>
    );
}