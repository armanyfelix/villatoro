import { useFormContext, Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function AddressInput({ name, label, type }) {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField 
                        {...field}
                        label={label}
                        fullWidth
                        required
                        type={type}
                    />
                )}
            />
        </Grid>
    )
}

export default AddressInput
