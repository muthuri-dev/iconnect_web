import { Container } from "@mui/system";
import cover from '../assets/svgs/cover.svg'


const CoverSVG = () => {
    return (
        <div className="svg">
            <Container>
                <img src={cover}height='250'alt="cover" />
            </Container>
        </div>
      );
}
 
export default CoverSVG;