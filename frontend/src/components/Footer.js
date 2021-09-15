import { Link } from "react-router-dom";

function Copyright() {
    return (
        <div className="text-gray-400 text-base" align="end">
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
        <div className=" h-40 clear-both p-4 mx-auto flex relative  justify-between w-full text-gray-300 bg-gray-900 " >
            <a href="https://www.instagram.com/lemilitaire6/">
                <img className="w-8 m-4"
                 src="/img/instaGray.png" alt="instaGray" />
            </a>
            <div className="lg:ml-52">
            <ul className="md:flex mt-2 text-center">
                <li>
                    <Link className="p-2 hover:bg-gray-800 rounded-lg" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="p-2 hover:bg-gray-800 rounded-lg" to="/Gallery">
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link className="p-2 hover:bg-gray-800 rounded-lg" to="/Shop">
                        Store
                    </Link>
                </li>
                <li>
                    <Link className="p-2 hover:bg-gray-800 rounded-lg" to="/About">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="p-2 hover:bg-gray-800 rounded-lg" to="/Contact">
                        Contact
                    </Link>
                </li>
            </ul>
            </div>
            <div className="m-4 ">
                <Copyright />
            </div>
        </div >
    )
}

export default Footer;
