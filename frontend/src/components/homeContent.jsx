import { Grid } from "@mui/material";
import { Box } from "@mui/system";


const HomeContent = () => {
    return ( 
        <div className="content">
            <Grid container spacing={5} direction='column'>
                <Grid item sx={6}md={4}>
                    <Box
                    sx={{backgroundColor:'white',height:100,width:200,
                    opacity:[0.6,0.5,0.4],borderRadius:5,
                    '&:Hover':{background:'primary'}
                    }}
                    >Kennedy muthuri</Box>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default HomeContent;