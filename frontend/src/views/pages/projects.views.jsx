import { Grid,Box,Typography } from "@mui/material";
import ProjectSVG from "../../components/projct.svg";

import ProjectsFAB from "../../utils/project.fab";



const Projects = () => {
    
    return ( 
        <div>
        <Grid container direction='column'>
            <Grid item><ProjectSVG/></Grid>
            <Grid item sx={{fontFamily:'monospace',color:'white',fontSize:20}} spacing={5}> Get Inspirations from other peers' projects</Grid>
            <Grid item container xs={6} sx={{display:'flex',justifyContent:'center'}}>
            <Box 
                    sx={{backgroundColor:'white',height:100,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,display:'grid',placeContent:'center',
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Web development</Typography>
                    </Box>
                    <Box 
                    sx={{backgroundColor:'white',height:100,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,display:'grid',placeContent:'center',
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>App development</Typography>
                    </Box>
                    <Box 
                    sx={{backgroundColor:'white',height:100,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,display:'grid',placeContent:'center',
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Machine Learning</Typography>
                    </Box>
                    <Box 
                    sx={{backgroundColor:'white',height:100,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,display:'grid',placeContent:'center',
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Data Science</Typography>
                    </Box>
                    <Box 
                    sx={{backgroundColor:'white',height:100,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,display:'grid',placeContent:'center',
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Project Proposals</Typography>
                    </Box>
            </Grid>
        </Grid>
        <ProjectsFAB/>   
        </div>
     );
}
 
export default Projects;