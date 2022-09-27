import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BlogSVG from "../../components/blogSvg";
import BlogsFAB from "../../utils/blogs.fab";
import axios from "axios";
import { useEffect, useState } from "react";


const BlogPage = () => {
    const[blogs, setBlogs]=useState([]);
    useEffect(function(){
        axios.get('http://localhost:8000/blogs/')
        .then(function(response){
            setBlogs(response.data.data);
        })
        .catch(function(err){
            console.log('fetch error: ' ,err);
        })
    },[]);

    return ( 
        <div>
            <Grid container direction='column' sx={{dispay:'flex',alignItems:'center'}}>
                <Grid item><BlogSVG/></Grid>
                <Grid item>
                    <Typography sx={{fontFamily:'monospace', color:'white',fontSize:20}}>Blogs and Articles</Typography>
                </Grid>
                <Grid item container>
                    <Grid item sx={{color:'white'}} >
                        <Box>
                            {blogs && blogs.map((blog)=>(
                                <Typography key={blog.id}>{blog.description}</Typography>
                            ))}
                            {!blogs && <Typography>Loading ...</Typography>}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <BlogsFAB/>
        </div>
     );
}
 
export default BlogPage;