import AddIcon from "@mui/icons-material/Add";
import {Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const ProjectsFAB = () => {
    const[project, setProject] = useState(false);

    const handleProject=function(){
        setProject(true);
    }
    const handleProjectClose=function(){
        setProject(false);
    }
    
    return ( 
        <div>

        <Fab variant='extended'arial-label='add'color='secondary' 
        sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),right:(theme)=>theme.spacing(2)}}
        onClick={handleProject}
        >
            <AddIcon/>Add Project
        </Fab>
       <Dialog open={project}>
            <DialogTitle sx={{textAlign:'center',fontFamily:'monospace'}}>Showcase your Project</DialogTitle>
            <DialogContent spacing={1} sx={{textAlign:'center'}}>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Title'type='text' />
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Description' type='text'/>
                <TextField sx={{width:300,margin:1}} required variant="outlined"color="secondary"label='category'type='url' />
                <TextField sx={{width:300,margin:1}} required variant="outlined"color="secondary"label='GitHub Link'type='url' />
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='Live Project Link'type='url' />
                <TextField sx={{width:300,margin:1}} required variant="outlined"color="secondary"label='ScreenShot'type='file' />
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Technologies used'type='url' />
                <FormControl sx={{width:300}} color='secondary' required variant='outlined'>
                    <InputLabel> Project Category</InputLabel>
                    <Select >
                        <MenuItem value={'web'}>Web Development</MenuItem>
                        <MenuItem value={'app'}>App Development</MenuItem>
                        <MenuItem value={'machine'}>Machine Learning</MenuItem>
                        <MenuItem value={'data'}>Data Science</MenuItem>
                        <MenuItem value={'proposal'}>Project Proposals</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleProjectClose} variant='contained'color="secondary">SUBMIT</Button>
            </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default ProjectsFAB;