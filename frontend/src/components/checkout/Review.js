import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function Review({ item, data }) {
  const classes = useStyles();
  const summary = useSelector(state => state.cart);
  const { cartItems } = summary;
  const setShipping = useSelector(state => state.shippingData)
  const { shipping } = setShipping;



  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => (price + item.price * item.qty), 0)
      .toFixed(2);
  };

  useEffect(() => { }, []);


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem className={classes.listItem} key={item.product}>
            <ListItemText primary={item.name} secondary={item.description} />
            <p className=" lg:mr-60 mr-24 text-gray-500 ">Qty:{getCartCount()}</p>
            <Typography variant="body2">{item.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Subtotal" />
          <Typography variant="body2" className={classes.total}>
            {getCartSubTotal()}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Shipping" />
          <Typography variant="body2" className={classes.total}>
            FREE
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="body1" className={classes.total}>
            {getCartSubTotal()}
          </Typography>
        </ListItem>
      </List>
      <div className="mb-10">
        <Typography variant="h6" gutterBottom className={classes.title}>
          Shipping
        </Typography>
            <p>{shipping.firstName} {shipping.lastName}</p>
            <p>{shipping.number}</p>
            <p>{shipping.email} </p>
            <p>{shipping.address1} </p>
            <p>{shipping.address2} </p>
            <p>{shipping.city} </p>
            <p>{shipping.state} </p>
            <p>{shipping.postalCode} </p>
            <p>{shipping.country} </p>
      </div>
    </>
  );
}

export default Review;
