import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddressInput from './addressInput';
import Button from '@material-ui/core/Button';
import { useForm, FormProvider } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux'
import { setShipping } from '../../redux/actions/shippingActions'

function AddressForm({ handleNext }) {

  const methods = useForm();
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => {
          dispatch(setShipping(data));
          // axios.post("http://localhost:3003/api/checkout", {
          //   address: data,
          // });
          handleNext();
        })}>
          <Grid container spacing={3}>
            <AddressInput name="firstName" label="First Name" />
            <AddressInput name="lastName" label="Last Name" />
            <AddressInput name="number" label="Phone Number" />
            <AddressInput name="email" type="email" label="Email" />
            <AddressInput name="address1" label="Address line 1" />
            <AddressInput name="address2" label="Address line 2" />
            <AddressInput name="city" label="City" />
            <AddressInput name="state" label="State/Province/Region" />
            <AddressInput name="postalCode" label="Zip / Postal code" />
            <AddressInput name="country" label="Country" />
            <Grid item xs={12}>
              <div className="text-right">
                <Button type="submit" variant="contained" color="primary">Next</Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}

const Address = connect()(AddressForm);

export default Address;