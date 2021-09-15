import { Link } from 'react-router-dom';

const Product = ({ imageUrl, name, price,  productId }) => {
    return (
        <div className="product p-10 flex flex-col justify-between">
            <Link to={`/product/${productId}`} 
                className="bg-white hover:shadow-xl transform hover:scale-110 cursor-pointer ease-out transition-all  hover:bg-gray-100 p-4  lg:w-76">
                <div>
                    <img src={imageUrl} 
                         className="bg-cover bg-center w-full object-cover h-80 bg-gray-300" 
                         alt={name}
                    />
                </div>
                <div className="mt-2 text-center">
                    <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
                        {name}
                    </p>
                    
                    <p className="font-bold">
                        ${price}
                    </p>
                </div>
            </Link> 
        </div>
    )
}

export default Product;
