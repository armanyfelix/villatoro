import '../App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions 
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

function ProductScreen({ match, history }) {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;
    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, match, product]);
    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
    };
    return (
        <section className="productscreen sm:p-2 md:p-10 lg:p-20 xl:px-52 mb-56 flex justify-between ">
            {loading ? (<div className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
            </div>)
                : error ? (<h2>{error}</h2>) : (
                    <>
                        <div className="productscreen__left flex ">
                            <div className="left__image flex justify-center">
                                <img src={product.imageUrl} alt={product.name} className="md:w-96 lg:max-w-2xl rounded" />
                            </div>
                            <div className="left__info text-center w-full lg:text-left my-6 lg:mt-0 lg:ml-6">
                                <h1 className="font-bold md:text-3xl text-xl mb-6">{product.name}</h1>
                                <p><span className="font-semibold"> Description: </span> {product.description} </p>
                            </div>
                        </div>
                        <div className="productscreen__right justify-center flex ">
                            <div className="right-info text-center p-4 space-y-5 w-56 bg-gray-200 rounded font-bold ">
                                <p>
                                    ${product.price}
                                </p>
                                <div className=" ">
                                    <h2 className="text-center font-semibold">Size: {product.size}</h2>
                                    {/* <select className="border w-32"
                                        value={product.size}>
                                        <option value="100x200">100x200</option>
                                        <option value="100x200">100x200</option>
                                        <option value="100x200">100x200</option>
                                </select> */}
                                </div>
                                <div className=" w-20 flex mx-auto shadow p-2 focus-within:ring-2 ring-gray-700 bg-white rounded-md ">
                                    <span className="mr-1">Qty</span>
                                    <select className="border-none " value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <p>
                                    <button type="button" className="bg-gray-600 p-2 px-5 shadow rounded hover:bg-gray-700 text-white focus:ring-2 ring-gray-900" onClick={addToCartHandler}>
                                    <i className="fas fa-shopping-cart mt-1 text-white"> </i> Add To Cart
                                    </button>
                                </p>
                            </div>
                        </div>
                    </>
                )}
        </section>
    )
}

export default ProductScreen;
