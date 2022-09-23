import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";


const BlogsFAB = () => {
    const[open, setOpen]=useState(false);
    const handleOpen= function(){
        setOpen(true);
    }
    const handleClose=function(){
        setOpen(false);
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
                    <TextField required color="secondary"variant="outlined"type='text' label='title' sx={{margin:1,width:300}}/>
                    <TextField required color="secondary"variant="outlined"type='text' row={4} multiline fullWidth label='Description' sx={{margin:1,width:300}}/>
                    <TextField  color="secondary"variant="outlined"type='file' label='Image' sx={{margin:1,width:300}}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="secondary">SUBMIT</Button>
                </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default BlogsFAB;