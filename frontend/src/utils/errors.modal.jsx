import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";
import axios from "axios";


const ErrorModal = () => {
    const[open, setOpen] =useState(false);
    const[description,setDescription]=useState('');
    const [git, setGit]= useState('');
    const[image, setImage]= useState('');
    const[phone, setPhone]= useState('');

    const handleOpen= function(){
        setOpen(true);
    }

    const handleError= function(e){
        setDescription(e.target.value);
    }
    const handleGit= function(e){
        setGit(e.target.value);
    }
    const handleImage= function(e){
        setImage(e.target.value);
    }
    const handlePhone= function(e){
        setPhone(e.target.value);
    }

    const handleClose = function(){
        setOpen(false);
        const newError=({
            description:description,
            git:git,
            image:image,
            phone:phone
        });
        axios.post('http://localhost:8000/errors',newError);
    }
    return ( 
        <div>
            <Fab onClick={handleOpen} variant='extended' color="secondary" sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),
            right:(theme)=>theme.spacing(2)}}>
                <ErrorIcon/>Share any Problem
            </Fab>
            <Dialog open={open}>
                <DialogTitle sx={{fontFamily:'monospace',textAlign:'center'}}>Get assistance from Peers</DialogTitle>
                <DialogContent sx={{textAlign:'center'}}>
                    <TextField required color="secondary" variant="outlined"label='Description'type='text' sx={{width:300,margin:1}} onChange={handleError} value={description}/>
                    <TextField  color="secondary" variant="outlined"label='GitHub Link'type='url' sx={{width:300,margin:1}}onChange={handleGit} value={git}/>
                    <TextField required color="secondary" variant="outlined"label='ScreenShot'type='file' sx={{width:300,margin:1}}onChange={handleImage} value={image}/>
                    <TextField required color="secondary" variant="outlined"label='Whatsapp NO.'type='phone' sx={{width:300,margin:1}} onChange={handlePhone} value={phone}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color='secondary'>SHARE</Button>
                </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default ErrorModal;