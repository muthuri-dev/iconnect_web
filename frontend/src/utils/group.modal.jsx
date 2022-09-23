import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import { useState } from "react";

const GroupModal = () => {
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
                Add Group Link
            </Fab>
            <Dialog open={open}>
                <DialogTitle sx={{fontFamily:'monospace',textAlign:'center'}}>Share Group Link</DialogTitle>
                <DialogContent sx={{textAlign:'center'}}>
                    <TextField required color="secondary" variant="outlined"label='Title'type='text' sx={{width:300,margin:1}}/>
                    <TextField required color="secondary" variant="outlined"label='Link'type='url' sx={{width:300,margin:1}}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color='secondary'>SHARE </Button>
                </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default GroupModal;