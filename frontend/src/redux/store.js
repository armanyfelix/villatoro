import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';
import { shippingReducer, shippingConfirmationReducer } from './reducers/shippingReducer';


const reducers = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    shippingData: shippingReducer,
    shippingConfirmation: shippingConfirmationReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
 ? JSON.parse(localStorage.getItem("cart"))
 : [];

const INITIAL_STATE = {
     cart: {
         cartItems: cartItemsInLocalStorage,
     },
 };

const store = createStore(
    reducers,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;