import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
    justifyContent: "space-between",
  },
  subtotal: {
    fontWeight: 600,
  },
  total: {
    fontWeight: 800,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function Review() {
  const classes = useStyles();
  const summary = useSelector(state => state.cart);
  const { cartItems } = summary;
  const setShipping = useSelector(state => state.shippingData)
  const { shipping } = setShipping;



  // const getCartCount = () => {
  //   return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  // };

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
            <div className="flex">
              <img src={item.imageUrl} alt={item.name} className=" w-1/12 opacity-80 h-1/12 mr-2" />
              <div>
                <ListItemText primary={item.name} secondary={item.description} />
                <Typography variant="body2" className="text-gray-500 " >Qty:{item.qty}</Typography>
              </div>
            </div>
            <Typography variant="body1">${item.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Subtotal" />
          <Typography variant="body2" className={classes.subtotal}>
            ${getCartSubTotal()}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Shipping" />
          <Typography variant="body2" className={classes.subtotal}>
            FREE
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="body1" className={classes.total}>
            ${getCartSubTotal()}
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
        <p>{shipping.address1}, {shipping.address2}</p>
        <p>{shipping.postalCode}</p>
        <p>{shipping.city}, {shipping.state}, {shipping.country}</p>
      </div>
    </>
  );
}

export default Review;
