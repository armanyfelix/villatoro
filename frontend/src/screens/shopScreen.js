import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import Product from '../components/Product';
import { getProducts as listProducts } from '../redux/actions/productActions';

function Shop() {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="bg-gray-300">
            <div className="flex justify-between bg-white">
                <p className="text-lg p-4 font-mate text-gray-700font-bold text-">If you are interested in purchasing an NFT visit <a href="https://opensea.io/" className="text-blue-900 hover:text-gray-300">OpenSea </a>for more information</p>
                <div className="flex lg:mr-20 items-center ">
                    <Link to="/cart" className=" hover:bg-gray-500 rounded-sm p-2 flex  ">
                        {/* <span className="items">
                            Cart
                        </span> */}
                        <i className="fas fa-shopping-cart m-1"> </i>
                        <span className="bg-gray-800 text-white w-6 h-6 item text-sm rounded-full 
                          flex justify-center items-center cursor-pointer">
                            {getCartCount()}
                        </span>

                    </Link>
                </div>
            </div>


            <div className="product w-full grid grid-cols-4 pt-10">
                {loading ? (
                    <div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>
                ) : error ? <h2>{error}</h2> : (
                    products.map((product) => (
                        <Product
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            productId={product._id}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default Shop;