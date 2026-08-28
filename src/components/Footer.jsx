export default function Footer() {
    let thisYear = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {thisYear} StayWell</p>
        </footer>
    );
}