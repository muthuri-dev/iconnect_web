import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import '../styles/index.css';
import FirstImage from "./image";


const Loading = () => {
    return ( 
        <div className={'load'}>
            <Container>
                <FirstImage/>
                <Typography
                className={'textStyle'}
                >
                    Loading ...
                </Typography>
            </Container>
        </div>
     );
}
 
export default Loading;