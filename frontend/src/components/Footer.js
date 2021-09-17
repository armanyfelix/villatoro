import { Link } from "react-router-dom";

function Copyright() {
    return (
        <div className="text-gray-400 text-center md:text-right  md:mt-0 mt-4" align="end">
            {'Copyright © '}
            <Link to="/">
                Omar Villatoro
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </div>
    );
}

function Footer() {
    return (
        <div className=" clear-both p-4 md:flex relative bottom-0 left-0 right-0 justify-between w-full text-gray-300 bg-gray-900 " style={{ minHeight: 'calc(100vh - 704px)' }} >
            <div className="flex w-full justify-between">
                <a href="https://www.instagram.com/lemilitaire6/" className="">
                    <img className="w-8 m-4"
                        src="/img/instaGray.png" alt="instaGray" />
                </a>
                <ul className="lg:text-base md:flex text-sm text-center">
                    <li>
                        <Link className="p-1 hover:bg-gray-800 rounded-lg" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="p-1 hover:bg-gray-800 rounded-lg" to="/Gallery">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link className="p-1 hover:bg-gray-800 rounded-lg" to="/Shop">
                            Store
                        </Link>
                    </li>
                    <li>
                        <Link className="p-1 hover:bg-gray-800 rounded-lg" to="/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="p-1 hover:bg-gray-800 rounded-lg" to="/Contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="md:m-4 lg:text-base w-full text-sm">
                <Copyright />
            </div>
        </div >
    )
}

export default Footer;
