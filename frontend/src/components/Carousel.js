import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from '../redux/actions/productActions';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect } from "react";

function Carousel() {
    const settings = {
        className: 'border-none',
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="lg:px-20  overflow-hidden">
            <Slider {...settings}>
                {loading ? (<div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>)
                    : error ? (<h2>{error}</h2>) : (
                        products.map((product) => (
                            <div key={product._id}>
                                <LazyLoadImage src={product.imageUrl} alt={product.name} threshold="100"   className="mx-auto w-auto max-h-screen  py-5" />
                                <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">{product.name}</p>
                            </div>
                        ))
                    )}
            </Slider>
        </div>
    )
}

export default Carousel
