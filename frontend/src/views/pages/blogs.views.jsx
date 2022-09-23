import { Grid, Typography } from "@mui/material";
import BlogSVG from "../../components/blogSvg";
import BlogsFAB from "../../utils/blogs.fab";


const BlogPage = () => {
    return ( 
        <div>
            <Grid container direction='column' sx={{dispay:'flex',alignItems:'center'}}>
                <Grid item><BlogSVG/></Grid>
                <Grid item>
                    <Typography sx={{fontFamily:'monospace', color:'white',fontSize:20}}>Blogs and Articles</Typography>
                </Grid>
                <Grid item container>
                    <Grid item sx={{color:'white'}} >kennedy</Grid>
                </Grid>
            </Grid>
            <BlogsFAB/>
        </div>
     );
}
 
export default BlogPage;