import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <section className="bg-gray-800">
            <Carousel/>
            <section className="w-full  text-center bg-gray-400 mt-20 lg:p-28 md:p-16 p-4">
                <div className="text-2xl">
                    If you want to buy an original print of the paintings you can visit the <Link to="/Shop" className="text-gray-700 underline  hover:text-gray-400">Store  </Link>
                </div>
            </section>
        </section>
    )
}

export default Home;