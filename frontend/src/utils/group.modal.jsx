import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const GroupModal = () => {
    const[open, setOpen] =useState(false);
    const[title, setTitle]= useState('');
    const[link, setLink] = useState('');


    const handleOpen= function(){
        setOpen(true);
    }
    const handleTitle= function(e){
        setTitle(e.target.value);
    }
    const handleLink= function(e){
        setLink(e.target.value);
    }
    const handleClose = function(){
        setOpen(false);
        console.log({title,link})
        const newGroup=({
            title:title,
            link:link
        });
        axios.post('http://localhost:8000/groups/',newGroup)
        .then(function(){
            console.log('sumbitted');
        }).catch(function(err){
            console.log('submitting error: ',err,);
        })
    }
    return ( 
        <div>
            <Fab onClick={handleOpen} variant='extended' color="secondary" sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),
            right:(theme)=>theme.spacing(2)}}>
                Add Group Link
            </Fab>
            <Dialog open={open}>
                <DialogTitle sx={{fontFamily:'monospace',textAlign:'center'}}>Share Group Link</DialogTitle>
                <DialogContent sx={{textAlign:'center'}}>
                    <TextField required color="secondary" variant="outlined"label='Title'type='text' sx={{width:300,margin:1}} value={title} onChange={handleTitle}/>
                    <TextField required color="secondary" variant="outlined"label='Link'type='url' sx={{width:300,margin:1}} value={link} onChange={handleLink}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color='secondary'>SHARE </Button>
                </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default GroupModal;