import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const NewsModal = () => {
    const[open, setOpen] =useState(false);
    const[title, setTitle]= useState('');
    const[content, setContent]= useState('');
    const[image, setImage]= useState('');
    const handleOpen= function(){
        setOpen(true);
    }
    const handleTitle= function(e){
        setTitle(e.target.value);
    }
    const handleContent= function(e){
        setContent(e.target.value);
    }
    const handleImage= function(e){
        setImage(e.target.value);
    }
    const handleClose = function(){
        setOpen(false);
        const newNews=({
            title:title,
            content:content,
            image:image
        });
        axios.post('http://localhost:8000/news',newNews);
    }
    return ( 
        <div>
            <Fab onClick={handleOpen} variant='extended' color="secondary" sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),
            right:(theme)=>theme.spacing(2)}}>
                Share Trends
            </Fab>
            <Dialog open={open}>
                <DialogTitle sx={{fontFamily:'monospace',textAlign:'center'}}>Share Trends Here</DialogTitle>
                <DialogContent sx={{textAlign:'center'}}>
                    <TextField required color="secondary" variant="outlined"label='Title'type='text' sx={{width:300,margin:1}} value={title} onChange={handleTitle}/>
                    <TextField required color="secondary" variant="outlined"label='Content'type='text' sx={{width:300,margin:1}} value={content} onChange={handleContent}/>
                    <TextField  color="secondary" variant="outlined"label='File'type='file' sx={{width:300,margin:1}} value={image} onChange={handleImage}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color='secondary'>SHARE </Button>
                </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default NewsModal;