import { Typography } from "@mui/material";
import { Container } from "@mui/system";


const Error = () => {
    return ( 
        <div className={'error'}>
            <Container>

            <Typography
                variant='h4'
                color='error'
            >404</Typography>


                <Typography
                variant='h4'
                color='error'
                >Page Not Found</Typography>
            </Container>
        </div>
     );
}
 
export default Error;