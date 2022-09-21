import { Divider, Grid } from "@mui/material";
import HomeContent from "../components/homeContent";
import Navbar from "../components/navbar";
import ViewSVG from "../components/view";
import ViewText from "../components/viewText";
import FloatBtn from "../utils/fab.modal";


const Home = () => {
    return ( 
        <div className="home">
               <Grid spacing={1} direction='column'>
                    <Grid item ><Navbar/></Grid>
                    <Grid item container spacing={5} direction='row' xs={12}md={6}>
                        <Grid item> <ViewText/></Grid>
                        <Divider/>
                        <Grid item><ViewSVG/></Grid>
                    </Grid>
                    <Grid item container spacing={5}direction='row'>
                        <Grid item><HomeContent/></Grid>
                    </Grid>
               </Grid>
                <FloatBtn/>
        </div>
     );
}
 
export default Home;