import * as actionTypes from '../constants/shippingConstants';

export const shippingReducer = (state = { shipping: {} }, action) => {
    switch (action.type) {
        case actionTypes.SET_SHIPPING:
            return {
                ...state,
                shipping: action.payload,
            }
        case actionTypes.SET_SHIPPING_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const shippingConfirmationReducer = (state = { message: "" }, action) => {
    switch (action.type) {
        case actionTypes.SET_CONFIRMATION:
            return {
                ...state,
                message: action.payload,
            }
        case actionTypes.SET_CONFIRMATION_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}


