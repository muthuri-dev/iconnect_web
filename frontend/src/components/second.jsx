import { Container } from "@mui/system";
import second from '../assets/svgs/second.svg'


const SecondSVG = () => {
    return ( 
        <div className="svg">
            <Container>
                <img src={second} alt="second" height='250'/>
            </Container>
        </div>
     );
}
 
export default SecondSVG;