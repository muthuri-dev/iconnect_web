import AddIcon from "@mui/icons-material/Add";
import {Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

const ProjectsFAB = () => {
    const[project, setProject] = useState(false);
    const[title, setTitle] =useState('');
    const[description, setDescription] =useState('');
    const[git, setGit] =useState('');
    const[live, setLive] =useState('');
    const[image, setImage] =useState('');
    const[skills, setSkills] =useState('');
    const[category, setCategory] =useState('');

    const handleProject=function(){
        setProject(true);
    }
    const handleTitle= function(e){
        setTitle(e.target.value);
    }
    const handleDescription= function(e){
        setDescription(e.target.value);
    }
    const handleGit= function(e){
        setGit(e.target.value);
    }
    const handleLive= function(e){
        setLive(e.target.value);
    }
    const handleImage= function(e){
        setImage(e.target.value);
    }
    const handleSkills= function(e){
        setSkills(e.target.value);
    }
    const handleCategory= function(e){
        setCategory(e.target.value);
    }
    const handleProjectClose=function(){
        setProject(false);
        const newProject=({
            title:title,
            description:description,
            git:git,
            live:live,
            image:image,
            skills:skills,
            category:category,
        });
        axios.post('http://localhost:8000/projects',newProject);
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
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Title'type='text'value={title} onChange={handleTitle} />
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Description' type='text'value={description} onChange={handleDescription}/>
                <TextField sx={{width:300,margin:1}} required variant="outlined"color="secondary"label='GitHub Link'type='url'value={git} onChange={handleGit} />
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='Live Project Link'type='url'value={live} onChange={handleLive} />
                <TextField sx={{width:300,margin:1}} required variant="outlined"color="secondary"label='ScreenShot'type='file'value={image} onChange={handleImage} />
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Technologies used'type='url'value={skills} onChange={handleSkills} />
                <FormControl sx={{width:300}} color='secondary' required variant='outlined'>
                    <InputLabel> Project Category</InputLabel>
                    <Select value={category} onChange={handleCategory} >
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