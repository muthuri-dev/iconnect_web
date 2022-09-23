import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import{useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";


const FloatBtn = () => {
    const[open, setOpen]=useState(false);

    const handleClick=function(){
        setOpen(true);
    }
    const handleClose=function(){
        setOpen(false);
    }
    return ( 
        <div>
            <Fab variant="extended" aria-label="edit" color='secondary'
        sx={{position:'fixed',bottom:(theme)=>theme.spacing(10),
            right:(theme)=>theme.spacing(2)
    }}
        >
            <DownloadIcon/>Download App
        </Fab>
        <Fab variant="extended" aria-label="edit" color='secondary'
        sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),
            right:(theme)=>theme.spacing(2)
    }}onClick={handleClick}
        >
            <EditIcon/>Edit Profile
        </Fab>
            <Dialog open={open}>
            <DialogTitle sx={{textAlign:'center',fontFamily:'monospace'}}>Create Your Profile</DialogTitle>
            <DialogContent spacing={1} sx={{textAlign:'center'}}>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Username'type='text' />
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Email address' type='email'/>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Phone number' type='tell'/>
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='Portifolio web'type='url' />
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='Linkein'type='url' />
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='GitHub'type='url' />
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='Twitter'type='url' />
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Tech Skills'type='url' />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant='contained'color="secondary">SUBMIT</Button>
            </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default FloatBtn;