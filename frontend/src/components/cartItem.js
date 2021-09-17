import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {

    return (
        <div className=" border-white border bg-gray-200  text-xs sm:text-sm md:text-base">
            <div className=" p-1 xl:gap-36 grid grid-cols-5 place-items-center ">
                <div className="p-1">
                    <img src={item.imageUrl} alt={item.name} className="" />
                </div>
                <Link to={`/product/${item.product}`} className=" no-underline hover:text-white   ">
                    <p>{item.name}</p>
                </Link>
                <p>${item.price}</p>
                <div>
                    <select className="rounded"
                        value={item.qty}
                        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                    >
                        {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <button className="sm:p-2 p-1 text-red-600 rounded-sm bg-gray-400 border-black 
                        cursor-pointer ease-out transition-all hover:bg-gray-700 focus:scale-110 
                        hover:scale-110 transform"
                    onClick={() => removeHandler(item.product)}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default CartItem;
