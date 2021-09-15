import { Button, Divider, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'

function Confirmation({ message }) {
    return (
        <>
            <Typography variant="h6" className="text-center">{message}</Typography>
            <Divider />
            <Typography variant="subtitle2" gutterBottom>
                {message === "Successful Payment"
                    ? "Your booking reference: hfi3fn4gnvej"
                    : ""}
            </Typography>
            <Button component={Link} to="/" variant="outlined" type="button">
                Back to Home
            </Button>
        </>
    )
}

export default Confirmation
