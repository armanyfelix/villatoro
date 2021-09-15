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
        <section className="productscreen max-w-7xl m-4 mb-56  flex mx-auto ">
            {loading ? (<div className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
            </div>)
                : error ? (<h2>{error}</h2>) : (
                    <>
                        <div className="productscreen__left flex">
                            <div className="m-4 left__image mx-auto max-w-sm md:ml-5">
                                <img src={product.imageUrl} alt={product.name} />
                            </div>
                            <div className="left__info mt-4 ml-6">
                                <h1 className="font-bold text-3xl mb-6">{product.name}</h1>
                                <p><span className="font-semibold"> Description: </span> {product.description} </p>
                            </div>
                        </div>

                        <div className="productscreen__right bg-gray-200 h-1/3 md:mr-5 mt-6 flex justify-center w-48 mx-auto  border-gray-700 border-2 pb-6 pt-6">
                            <div className="right-info border-gray-700 text-center font-bold ">
                                <p className="border-b-2 border-gray-800  mb-2 pb-4 px-10">
                                    ${product.price}
                                </p>
                                {/* <div className="mb-3 ">
                                    <h3 className="text-center">Choose a size</h3>
                                    <select className="border w-32"
                                        value={product.size} onChange={(e) => setSize(e.target.value)}>
                                        <option value="100x200">100x200</option>
                                        <option value="100x200">100x200</option>
                                        <option value="100x200">100x200</option>
                                    </select>
                                </div> */}
                                <div className="p-6 px-10 border-b-2 border-gray-800 mb-6 justif">
                                    Qty
                                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <p className="bg-gray-600 p-1  hover:bg-gray-800 text-center border-sm  m-3 text-white">
                                    <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                                </p>
                            </div>
                        </div>
                    </>
                )}
        </section>
    )
}

export default ProductScreen;
