import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";


const HomeContent = () => {
    const navigate=useNavigate();

    const handleProjects=function(){
        navigate('/projects');
    }
    const handleBlogs= function(){
        navigate('/blogs');
    }
    const handleErrors= function(){
        navigate('/solution');
    }
    const handleMentors= function(){
        navigate('/mentors');
    }
    const handleNews= function(){
        navigate('/news');
    }
    const handleGroups= function(){
        navigate('/groups');
    }
    return ( 
        <div className="content">
            <Grid container spacing={5} direction='column' alignContent='center'
            >
                <Grid item container xs={6}md={4}sm={4}lg={4} sx={{display:'flex',justifyContent:'center'}}>
                    <Box
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    ><Typography sx={{fontFamily:'monospace'}} color='secondary'>Teams</Typography>
                    <Typography>Build and connect with teams of interest to build amizing solutions</Typography>
                    </Box>
                    <Box onClick={handleGroups}
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Groups</Typography>
                    <Typography>Find and join groups of interested fiels in technology</Typography>
                    </Box>
                    <Box onClick={handleProjects}
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Projects</Typography>
                    <Typography>Showcase and view other peers projects and ideas</Typography>
                    </Box>
                    <Box
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Peers</Typography>
                    <Typography>View other peers profiles and connect with interested persons</Typography>
                    </Box>
                    <Box onClick={handleBlogs}
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Blogs</Typography>
                    <Typography>Publish your blogs and view other peers blogs </Typography>
                    </Box>
                    <Box onClick={handleErrors}
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}} color='secondary'>Errors</Typography>
                    <Typography>Share problems experienced to the community to get solutions</Typography>
                    </Box>
                    <Box onClick={handleMentors}
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}}color='secondary'>Mentors</Typography>
                    <Typography>Find and connect with experienced persons who can guide through the tech journey</Typography>
                    </Box>
                    <Box
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}}color='secondary'>Animations</Typography>
                    <Typography>Showcase your animation skills</Typography>
                    </Box>
                    <Box
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}}color='secondary'>Designs</Typography>
                    <Typography>Share your inspiration designs to other peers</Typography>
                    </Box>
                    <Box onClick={handleNews}
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}}color='secondary'>Tech News</Typography>
                    <Typography>Catch up with latest news including jobs and internships</Typography>
                    </Box>
                    <Box
                    sx={{backgroundColor:'white',height:150,width:180,
                    opacity:[0.6,0.5,0.4],borderRadius:5,margin:2,
                    '&:Hover':{background:'primary'}
                    }}
                    >
                        <Typography sx={{fontFamily:'monospace'}}color='secondary'>Animations</Typography>
                    <Typography>Build and connect with teams of interest</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default HomeContent;