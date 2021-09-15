import { Link } from 'react-router-dom';
import '../../App.css';

function Drawer({show, click}) {

    const drawerClass = ["sidedrawer"];

    if (show) {
        drawerClass.push("show");
    }

    return (
        <div className={drawerClass.join(" ")} >
            <ul className="flex flex-col mt-20 list-none items-center justify-center font-mate text-2xl p-8 text-gray-400" 
                onClick={click}>
                <li className="mb-5">
                    <Link to="/" >
                        Home
                    </Link>
                </li>
                <li className="mb-5">
                    <Link to="/Gallery" className="">
                        Gallery
                    </Link>
                </li >
                <li className="mb-5">
                    <Link to="/Shop" className="">
                        Store
                    </Link>
                </li>
                <li className="mb-5">
                    <Link to="/About" className="">
                        About
                    </Link>
                </li>
                <li className="mb-5">
                    <Link to="/Contact" className="">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Drawer;
