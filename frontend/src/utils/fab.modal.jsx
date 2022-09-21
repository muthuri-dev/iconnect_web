import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import{useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";


const FloatBtn = () => {
    const[open, setOpen]=useState(false);

    const handleClick=function(){
        setOpen(true);

    }
    return ( 
        <div>
        <Fab variant="extended" aria-label="edit" color='secondary'
        sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),
            right:(theme)=>theme.spacing(2)
    }}onClick={handleClick}
        >
            <EditIcon/>Edit Profile
        </Fab>
            <Dialog open={open}>
            <DialogTitle>Create Your Profile</DialogTitle>
            <DialogContent>
                <TextField variant="outlined"color="secondary"label='Username' />
            </DialogContent>
            <DialogActions>
                <Button variant='contained'color="secondary">SUBMIT</Button>
            </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default FloatBtn;