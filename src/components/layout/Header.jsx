import logo from '../../images/harry-potter-logo.png.webp';

function Header() {

    return (
        <header className="header">
            <img
                className="logo"
                src={logo}
                alt="Harry Potter Logo"
            />
        </header>
    );
}

export default Header;