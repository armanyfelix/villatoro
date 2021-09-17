import { Button, Divider, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'

function Confirmation({ message }) {
    return (
        <>
            <Typography variant="h6" className="text-center mt-3">{message}</Typography>
            <Divider />
            <Typography variant="subtitle2" className="mt-4" gutterBottom>
                {message === "Succesful Payment"
                    ? "Your booking reference: hfi3fn4gnvej"
                    : ""}
            </Typography>
            <Button component={Link} to="/" className="justify-center mt-4" variant="outlined" type="button">
                Back to Home
            </Button>
        </>
    )
}

export default Confirmation
