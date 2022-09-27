import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const MentorsPage = () => {
    const[open, setOpen] =useState(false);
    const[name ,setName]=useState('');
    const [git, setGit]=useState('');
    const[linkedin, setLinkedin]=useState('');
    const[phone, setPhone]= useState('');

    const handleOpen= function(){
        setOpen(true);
    }
    const handleName= function(e){
        setName(e.target.value);
    }
    const handleGit= function(e){
        setGit(e.target.value);
    }
    const handleLinkedin= function(e){
        setLinkedin(e.target.value);
    }
    const handlePhone= function(e){
        setPhone(e.target.value);
    }
    const handleClose = function(){
        setOpen(false);
        const newMentor=({
            name:name,
            git:git,
            linkedin:linkedin,
            phone:phone
        });
        axios.post('http://localhost:8000/mentors',newMentor);
    }
    return ( 
        <div>
            <Fab onClick={handleOpen} variant='extended' color="secondary" sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),
            right:(theme)=>theme.spacing(2)}}>
                Be a Mentor
            </Fab>
            <Dialog open={open}>
                <DialogTitle sx={{fontFamily:'monospace',textAlign:'center'}}>Get assistance from Peers</DialogTitle>
                <DialogContent sx={{textAlign:'center'}}>
                    <TextField required color="secondary" variant="outlined"label='Name'type='text' sx={{width:300,margin:1}} value={name} onChange={handleName}/>
                    <TextField  color="secondary" variant="outlined"label='GitHub Link'type='url' sx={{width:300,margin:1}} value={git} onChange={handleGit}/>
                    <TextField  color="secondary" variant="outlined"label=' Linkedin'type='url' sx={{width:300,margin:1}}value={linkedin} onChange={handleLinkedin}/>
                    <TextField required color="secondary" variant="outlined"label='Phone NO.'type='phone' sx={{width:300,margin:1}} value={phone} onChange={handlePhone}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color='secondary'>SHARE</Button>
                </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default MentorsPage;