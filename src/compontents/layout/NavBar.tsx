import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <header>
            <nav className="px-2 py-4 bg-yellow">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="w-auto h-6 mr-3 sm:h-10" alt="Pokemon Logo" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}