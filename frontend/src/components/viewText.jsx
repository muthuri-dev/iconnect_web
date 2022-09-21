import { Divider, Typography } from "@mui/material";
import Teams from "./teams";



const ViewText = () => {
    return ( 
        <div className="viewtext">
            <Typography sx={{fontFamily:'Monospace',fontWeight:'bold'}}variant="h5">Already have good tech skills or a beginner?</Typography>
            <Typography variant='body1'sx={{fontStyle:'oblique'}}>Why not become part of iConnect community and connect</Typography>
            <Typography variant='body1'sx={{fontStyle:'oblique'}}> with peers and mentors who will guide and share ideas together</Typography>
            <Divider/>
            <Typography>iConnect is a open source community platform where peers interact and build real life  </Typography>
            <Typography>solutions and join interested group</Typography>
            <Divider/>
            <Teams/>
        </div>
     );
}
 
export default ViewText;