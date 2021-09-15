import * as actionTypes from '../constants/shippingConstants';

export const setShipping = (data) => (dispatch) => {
    try {
        dispatch({
            type: actionTypes.SET_SHIPPING,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.SET_SHIPPING_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
};

export const shippingConfirmation = (data) => (dispatch) => {
    try {
        dispatch({
            type: actionTypes.SET_CONFIRMATION,
            payload: data.message,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.SET_SHIPPING_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};