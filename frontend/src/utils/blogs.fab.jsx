import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";


const BlogsFAB = () => {
    const[open, setOpen]=useState(false);
    const[title, setTitle]= useState('');
    const[description, setDescription]= useState('');
    const[image, setImage]= useState('')
    const handleOpen= function(){
        setOpen(true);
    }
    const handleTitle= function(e){
        setTitle(e.target.value);
    }
    const handleDescription= function(e){
        setDescription(e.target.value);
    }
    const handleImage= function(e){
        setImage(e.target.value);
    }

    const handleClose=function(e){
        setOpen(false);
        e.preventDefault();
        console.log({title, description});
        const newBlog=({
            title:title,
            description:description
        });
        axios.post('http://localhost:8000/blog',newBlog);
    }
    return ( 
        <div>
            <Fab onClick={handleOpen} variant='extended' color="secondary" sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),
            right:(theme)=>theme.spacing(2)}}> 
                <AddIcon/>Publish your Blog
            </Fab>
            <Dialog open={open}>
                <DialogTitle sx={{fontFamily:'monospace',display:'flex',justifyContent:'center'}}>Add a Blog or Article</DialogTitle>
                <DialogContent sx={{textAlign:'center'}}>
                    <TextField required color="secondary"variant="outlined"type='text' label='title' sx={{margin:1,width:300}} onChange={handleTitle}/>
                    <TextField required color="secondary"variant="outlined"type='text' row={4} multiline fullWidth label='Description' sx={{margin:1,width:300}} onChange={handleDescription}/>
                    <TextField  color="secondary"variant="outlined"type='file' label='Image' sx={{margin:1,width:300}} onChange={handleImage} value={image}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="secondary">SUBMIT</Button>
                </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default BlogsFAB;