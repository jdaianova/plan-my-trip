import './Header.css';
import train from '../img/train.png';

function Header() {
    return (
        <header className="Header">
            <div className="Title">
                <div className="Title-first-row">
                <h1>Explore</h1>
                <p>the</p>
                </div>
                <h2>world</h2>
            </div>
            <img className="Train-img" src={train}></img>

        </header>
    )
}

export default Header;