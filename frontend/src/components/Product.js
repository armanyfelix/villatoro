import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Product = ({ imageUrl, name, price,  productId }) => {
    return (
        <div className="product p-3 flex flex-col">
            <Link to={`/product/${productId}`} 
                className="bg-white hover:shadow-xl rounded transform delay-200 hover:scale-110 cursor-pointer ease-out transition-all  hover:bg-gray-100 p-4">
                <div>
                    <LazyLoadImage src={imageUrl} 
                         className="w-full object-cover md:h-96 h-72 bg-gray-300" 
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
