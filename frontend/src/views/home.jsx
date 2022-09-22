import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import HomeContent from "../components/homeContent";
import Navbar from "../components/navbar";
import ViewSVG from "../components/view";
import ViewText from "../components/viewText";
import FloatBtn from "../utils/fab.modal";


const Home = () => {
    return ( 
        <div className="home">
               <Grid container spacing={5} direction='column' >
                    <Grid item ><Navbar/></Grid>
                    <Grid item container spacing={5} direction='row' xs={12}md={6}>
                        <Grid item> <ViewText/></Grid>
                        <Divider/>
                        <Grid item><ViewSVG/></Grid>
                    </Grid>
                    <Grid item>
                        <Box sx={{backgroundColor:'purple',width:300,color:'white',fontFamily:"monospace",
                        height:30,borderRadius:4,fontSize:25,display:'flex',justifyContent:'center',marginLeft:10
                    }}>EXPLORE</Box>
                    </Grid>
                    <Grid item container spacing={5}direction='row'>
                        <Grid item><HomeContent md={3}/></Grid>
                    </Grid>
               </Grid>
                <FloatBtn/>
        </div>
     );
}
 
export default Home;