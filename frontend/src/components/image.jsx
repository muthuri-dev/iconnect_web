import { Container } from '@mui/system';
import logo from '../assets/images/logo.png';
import '../styles/index.css'

const FirstImage = () => {
    return ( 
        <div className={'first'}>
            <Container>
                <img src={logo} width='190' alt='logo'/>
            </Container>
        </div>
     );
}
 
export default FirstImage;