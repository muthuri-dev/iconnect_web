import { Divider, Grid } from "@mui/material";
import Navbar from "../components/navbar";
import ViewSVG from "../components/view";
import ViewText from "../components/viewText";


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
               </Grid>
                
        </div>
     );
}
 
export default Home;