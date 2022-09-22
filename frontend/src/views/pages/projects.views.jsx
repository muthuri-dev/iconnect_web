import { Grid } from "@mui/material";


const Projects = () => {
    return ( 
        <Grid container direction='column'>
            <Grid item>
            <Box
                    sx={{backgroundColor:'white',height:100,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Projects</Typography>
                    <Typography>Build and connect with teams of interest</Typography>
                    </Box>
            </Grid>
        </Grid>
     );
}
 
export default Projects;