import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <section className="bg-gray-800">
            <Carousel className=" mx-auto justify-center items-center" />
            <section className="w-full  text-center bg-gray-400 mt-20 lg:p-28 md:p-16 p-4">
                <div>
                    <div>
                    If you want a physical copy of the author's works
                    </div>
                    <div className="mt-4">
                        <Link to="/Shop" className="text-gray-600   hover:text-gray-300">Visit the Store  </Link>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home;