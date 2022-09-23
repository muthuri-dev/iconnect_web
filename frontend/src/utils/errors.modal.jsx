import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";


const ErrorModal = () => {
    const[open, setOpen] =useState(false);

    const handleOpen= function(){
        setOpen(true);
    }
    const handleClose = function(){
        setOpen(false);
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
                    <TextField required color="secondary" variant="outlined"label='Description'type='text' sx={{width:300,margin:1}}/>
                    <TextField  color="secondary" variant="outlined"label='GitHub Link'type='url' sx={{width:300,margin:1}}/>
                    <TextField required color="secondary" variant="outlined"label='ScreenShot'type='file' sx={{width:300,margin:1}}/>
                    <TextField required color="secondary" variant="outlined"label='Whatsapp NO.'type='phone' sx={{width:300,margin:1}}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color='secondary'>SHARE</Button>
                </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default ErrorModal;