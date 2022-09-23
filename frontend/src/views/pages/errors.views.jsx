import { Grid } from "@mui/material";
import ErrorModal from "../../utils/errors.modal";


const ErrorsPage = () => {
    return ( 
        <div>
            <Grid container direction='column'sx={{display:'flex',alignItems:'center'}}>
                <Grid item></Grid>
            </Grid>
            <ErrorModal/>
        </div>
     );
}
 
export default ErrorsPage;