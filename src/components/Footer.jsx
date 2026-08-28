export default function Footer() {
    let thisYear = new Date().getFullYear();
    return (
        <footer className="app-container">
            <p>&copy; {thisYear} StayWell</p>
        </footer>
    );
}