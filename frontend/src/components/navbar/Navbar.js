import { Link } from 'react-router-dom';
import '../../App.css';


function Navbar({ click }) {

    return (
        <nav className="flex w-full  text-white shadow-lg bg-gray-700 bg-teal-500 p-4">
            <div className="flex w-full text-white mr-6">
                <a href="/" className=" lg:ml-20 sm:text-2xl text-lg font-mate uppercase ">Omar Villatoro</a>
            </div>
            <div className="links flex justify-end w-full text-lg font-mate italic mr-6  text-gray-300">
                <Link to="/" className="inline-block text-teal-200 hover:text-white  mr-4">
                    Home
                </Link>
                <Link to="/Gallery" className="inline-block text-teal-200 hover:text-white  mr-4">
                    Gallery
                </Link>
                <Link to="/Shop" className="inline-block text-teal-200 hover:text-white mr-4">
                    Store
                </Link>
                <Link to="/About" className="inline-block text-teal-200 hover:text-white mr-4">
                    About
                </Link>
                <Link to="/Contact" className="inline-block text-teal-200 hover:text-white mr-4">
                    Contact
                </Link>
            </div>
            <button className="flex drawerBtn items-center hover:bg-gray-900 px-3 py-2 m border rounded text-teal-200 border-teal-40"
                onClick={click} >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>

        </nav>
    );
};

export default Navbar;