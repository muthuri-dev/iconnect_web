import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
//import { Box } from "@mui/system";
import BlogSVG from "../../components/blogSvg";
import BlogsFAB from "../../utils/blogs.fab";
import axios from "axios";
import { useEffect, useState } from "react";


const BlogPage = () => {
    const[blogs, setBlogs]=useState([]);
    useEffect(function(){
        axios.get('https://immense-basin-80931.herokuapp.com/blogs/')
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
                <Grid item container direction='row'sx={{alignItems:'center'}} >
                    
                        {blogs && blogs.map((blog)=>(
                            <Card elevation={3} key={blog.id}sx={{margin:8,width:300}}>
                                <CardHeader
                                title={blog.title}
                                />
                                <CardContent>
                                    <Typography color='secondary'>{blog.description}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                </Grid>
            </Grid>
            <BlogsFAB/>
        </div>
     );
}
 
export default BlogPage;